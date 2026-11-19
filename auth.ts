import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { safeEqual } from "@/lib/safe-equal";
import { loginThrottle, MAX_FAILURES_PER_EMAIL, MAX_FAILURES_PER_IP } from "@/lib/login-throttle";

const credentialsSchema = z.object({ email: z.string().email().max(254), password: z.string().min(8).max(200) });

// A complete bcrypt hash: $2a$/$2b$/$2y$, a two-digit cost, then 53 characters.
const BCRYPT_HASH = /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/;

// Compared against when the email does not match, so a wrong email costs the
// same bcrypt work as a wrong password and the response time does not reveal
// which one was wrong. It is the hash of a discarded random string.
const DUMMY_HASH = "$2b$12$hafSZ6Wdbg0m5QnMH46IZ.m.GHJUzTtwXUbJ6wLQCXud0OeDSzn7u";

function clientIp(request: Request | undefined) {
  const forwarded = request?.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request?.headers.get("x-real-ip") || "unknown";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      async authorize(raw, request) {
        const parsed = credentialsSchema.safeParse(raw);
        if (!parsed.success) return null;

        // Fail closed: with no admin email or no valid hash, nobody can sign in.
        const adminEmail = process.env.DEMO_ADMIN_EMAIL?.trim().toLowerCase();
        const passwordHash = process.env.DEMO_ADMIN_PASSWORD_HASH?.trim();
        if (!adminEmail || !passwordHash) {
          console.error("Auth not configured: set DEMO_ADMIN_EMAIL and DEMO_ADMIN_PASSWORD_HASH");
          return null;
        }
        if (!BCRYPT_HASH.test(passwordHash)) {
          console.error(
            "Auth not configured: DEMO_ADMIN_PASSWORD_HASH is not a bcrypt hash. In .env.local every $ must be escaped as \\$ (see .env.example)."
          );
          return null;
        }

        const email = parsed.data.email.trim().toLowerCase();
        const ipKey = `ip:${clientIp(request)}`;
        const emailKey = `email:${email}`;
        if (
          loginThrottle.isBlocked(ipKey, MAX_FAILURES_PER_IP) ||
          loginThrottle.isBlocked(emailKey, MAX_FAILURES_PER_EMAIL)
        ) {
          console.warn("Sign-in refused: too many failed attempts");
          return null;
        }

        const emailMatches = safeEqual(email, adminEmail);
        // Always run bcrypt (against a dummy hash for an unknown email).
        const passwordMatches = await bcrypt.compare(parsed.data.password, emailMatches ? passwordHash : DUMMY_HASH);
        if (!emailMatches || !passwordMatches) {
          loginThrottle.recordFailure(ipKey);
          loginThrottle.recordFailure(emailKey);
          return null;
        }

        loginThrottle.clear(emailKey);
        return { id: "owner-1", name: "Alex Rivera", email: adminEmail, role: "OWNER" };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = (user as typeof user & { role: string }).role;
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});
