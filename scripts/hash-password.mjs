// Generates the bcrypt hash for DEMO_ADMIN_PASSWORD_HASH (Command Center login).
//
//   npm run hash-password
//
// The password is typed at a hidden prompt, so it never lands in shell history
// or the process list. Nothing is written to disk; copy the printed value into
// Vercel (as-is) or .env.local (with every $ escaped, as printed).
import bcrypt from "bcryptjs";

const COST = 12;
const MIN_LENGTH = 12;

function readHidden(prompt) {
  return new Promise((resolve, reject) => {
    const { stdin, stdout } = process;
    if (!stdin.isTTY) {
      // Piped input, e.g. from a password manager CLI.
      let data = "";
      stdin.setEncoding("utf8");
      stdin.on("data", (chunk) => (data += chunk));
      stdin.on("end", () => resolve(data.replace(/\r?\n$/, "")));
      stdin.on("error", reject);
      return;
    }
    stdout.write(prompt);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    let value = "";
    const onData = (chunk) => {
      for (const ch of chunk) {
        if (ch === "\r" || ch === "\n") {
          stdin.setRawMode(false);
          stdin.pause();
          stdin.off("data", onData);
          stdout.write("\n");
          resolve(value);
          return;
        }
        if (ch === "\u0003") {
          stdin.setRawMode(false);
          stdout.write("\n");
          process.exit(130);
        }
        if (ch === "\u007f" || ch === "\b") value = value.slice(0, -1);
        else value += ch;
      }
    };
    stdin.on("data", onData);
  });
}

const password = await readHidden("New Command Center password (input hidden): ");
if (password.length < MIN_LENGTH) {
  console.error(`Password must be at least ${MIN_LENGTH} characters.`);
  process.exit(1);
}

const hash = bcrypt.hashSync(password, COST);
console.log("\nVercel → Project → Settings → Environment Variables (paste as-is):");
console.log(`  DEMO_ADMIN_PASSWORD_HASH=${hash}`);
console.log("\n.env.local (every $ escaped, because Next.js expands $ in .env files):");
console.log(`  DEMO_ADMIN_PASSWORD_HASH="${hash.replace(/\$/g, "\\$")}"`);
