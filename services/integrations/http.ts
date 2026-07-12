import { IntegrationUnavailableError,type IntegrationName } from "./contracts";
type RequestOptions={provider:IntegrationName;token:string;url:string;signal:AbortSignal;headers?:HeadersInit};
export async function getJson<T>({provider,token,url,signal,headers}:RequestOptions):Promise<T>{
  const timeout=AbortSignal.timeout(15_000); const combined=AbortSignal.any([signal,timeout]);
  let response:Response;
  try{response=await fetch(url,{headers:{Authorization:`Bearer ${token}`,Accept:"application/json",...headers},signal:combined,cache:"no-store"});}
  catch(error){throw new IntegrationUnavailableError(provider,error instanceof Error?error.message:"network failure");}
  if(!response.ok)throw new IntegrationUnavailableError(provider,`HTTP ${response.status}`);
  return response.json() as Promise<T>;
}
export function digits(value:string|undefined|null){return String(value??"").replace(/\D/g,"").slice(-10);}
export function asDate(value:unknown,fallback=new Date(0)){const date=new Date(String(value??""));return Number.isNaN(date.valueOf())?fallback:date;}
