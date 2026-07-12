import * as React from "react"; import { cn } from "@/lib/utils";
export function Card({className,...p}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn("rounded-2xl border border-white/[.08] bg-[#151719] shadow-[0_12px_40px_rgba(0,0,0,.18)]",className)} {...p}/>}
export function CardHeader({className,...p}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn("flex items-center justify-between p-5 pb-0",className)} {...p}/>}
export function CardTitle({className,...p}:React.HTMLAttributes<HTMLHeadingElement>){return <h3 className={cn("text-sm font-semibold text-white",className)} {...p}/>}
export function CardContent({className,...p}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn("p-5",className)} {...p}/>}
