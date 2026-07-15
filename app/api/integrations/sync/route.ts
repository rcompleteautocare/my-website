import { timingSafeEqual } from "node:crypto"; import { createAdapters } from "@/services/integrations"; import { syncAll } from "@/services/integrations/sync";
export const runtime="nodejs"; export const maxDuration=300;
function matches(secret:string|undefined,supplied:string){if(!secret)return false;const a=Buffer.from(secret),b=Buffer.from(supplied);return a.length===b.length&&timingSafeEqual(a,b);}
// Accepts INTEGRATION_SYNC_SECRET (manual/external callers) or CRON_SECRET (Vercel Cron sends `Bearer ${CRON_SECRET}` on scheduled invocations).
function authorized(request:Request){const supplied=request.headers.get("authorization")?.replace(/^Bearer\s+/i,"")??"";return matches(process.env.INTEGRATION_SYNC_SECRET,supplied)||matches(process.env.CRON_SECRET,supplied);}
async function runSync(request:Request){if(!authorized(request))return Response.json({error:"Unauthorized"},{status:401});const results=await syncAll(createAdapters());const succeeded=results.filter(x=>x.ok).length;return Response.json({ok:succeeded>0,status:succeeded===results.length?"healthy":succeeded?"partial":"unavailable",results},{status:succeeded?200:503});}
export async function GET(request:Request){return runSync(request);}
export async function POST(request:Request){return runSync(request);}
