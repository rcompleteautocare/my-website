import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

const credentialsSchema = z.object({ email:z.string().email(), password:z.string().min(8) });
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages:{signIn:"/login"}, session:{strategy:"jwt"},
  providers:[Credentials({ credentials:{email:{},password:{}}, authorize(raw){
    const parsed=credentialsSchema.safeParse(raw); if(!parsed.success) return null;
    const email=process.env.DEMO_ADMIN_EMAIL, password=process.env.DEMO_ADMIN_PASSWORD;
    if(!email||!password){console.error("Auth not configured: set DEMO_ADMIN_EMAIL and DEMO_ADMIN_PASSWORD");return null;}
    if(parsed.data.email===email && parsed.data.password===password) return {id:"owner-1",name:"Alex Rivera",email,role:"OWNER"};
    return null;
  }})],
  callbacks:{jwt({token,user}){if(user) token.role=(user as typeof user & {role:string}).role;return token;},session({session,token}){if(session.user){session.user.id=token.sub!;session.user.role=token.role as string;}return session;}},
});
