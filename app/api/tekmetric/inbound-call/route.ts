/**
 * Retained as an explicit tombstone for legacy callers. The Command Center no
 * longer writes call activity into Tekmetric. Tekmetric's official RingCentral
 * integration remains responsible for shop-management call workflows.
 */
export async function POST(){return Response.json({error:"This legacy endpoint is retired. Use Tekmetric's official RingCentral integration and the Command Center RingCentral sync adapter."},{status:410});}
