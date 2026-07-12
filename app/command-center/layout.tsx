import { redirect } from "next/navigation"; import { auth } from "@/auth"; import { AppShell } from "@/components/command-center/app-shell";
export const metadata={title:"Command Center | R Complete"};
export default async function Layout({children}:{children:React.ReactNode}){const session=await auth();if(!session?.user) redirect("/login");return <AppShell user={{name:session.user.name,role:session.user.role}}>{children}</AppShell>}
