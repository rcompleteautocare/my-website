export type IntegrationName = "TEKMETRIC" | "RINGCENTRAL" | "GMAIL" | "GOOGLE_CALENDAR" | "QUICKBOOKS";
export type SyncCursor = { cursor?: string; highWaterMark?: Date };
export type SyncBatch<T> = { records:T[]; next:SyncCursor; hasMore:boolean };
export type SyncContext = { cursor:SyncCursor; signal:AbortSignal };
export type SyncResult = { provider:IntegrationName; ok:boolean; recordsRead:number; recordsWritten:number; error?:string };

export interface IntegrationAdapter<TRecord=unknown> {
  readonly name:IntegrationName;
  readonly resources:readonly string[];
  isConfigured():boolean;
  pull(resource:string,context:SyncContext):Promise<SyncBatch<TRecord>>;
  persist(resource:string,records:TRecord[]):Promise<number>;
}

export class IntegrationUnavailableError extends Error {
  constructor(provider:IntegrationName,reason:string){super(`${provider} unavailable: ${reason}`);this.name="IntegrationUnavailableError";}
}

export type UnifiedCustomerContext={
  customerId:string; customerName:string; phone:string; lifetimeSpend:number;
  vehicles:Array<{id:string;label:string;vin:string}>;
  repairHistory:Array<{id:string;number:string;status:string;total:number;createdAt:Date}>;
  openRepairOrders:Array<{id:string;number:string;status:string;total:number}>;
  upcomingAppointments:Array<{id:string;service:string;startsAt:Date}>;
};
