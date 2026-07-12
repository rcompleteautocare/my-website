import { PrismaClient, Role, RepairOrderStatus, AppointmentStatus, CallStatus } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();
const firstNames = ["Liam","Olivia","Noah","Emma","Elijah","Amelia","James","Sophia","Mateo","Mia","Henry","Ava"];
const lastNames = ["Anderson","Bennett","Carter","Davis","Edwards","Flores","Garcia","Hughes","Johnson","King","Lewis","Moore"];
const cars = [["Toyota","Camry"],["Honda","CR-V"],["Ford","F-150"],["Chevrolet","Equinox"],["Jeep","Grand Cherokee"],["Subaru","Outback"],["Nissan","Rogue"]];

async function main() {
  await prisma.syncRun.deleteMany(); await prisma.syncCursor.deleteMany(); await prisma.integrationConnection.deleteMany();
  await prisma.externalRecordLink.deleteMany(); await prisma.customerNote.deleteMany(); await prisma.usedCarPurchase.deleteMany(); await prisma.email.deleteMany(); await prisma.estimate.deleteMany();
  await prisma.notification.deleteMany(); await prisma.message.deleteMany(); await prisma.call.deleteMany();
  await prisma.sale.deleteMany(); await prisma.appointment.deleteMany(); await prisma.repairOrder.deleteMany();
  await prisma.vehicle.deleteMany(); await prisma.customer.deleteMany(); await prisma.usedCar.deleteMany(); await prisma.user.deleteMany(); await prisma.setting.deleteMany();
  const owner = await prisma.user.create({ data: { name: "Alex Rivera", email: "owner@rcomplete.com", passwordHash: await hash("ChangeMe123!", 12), role: Role.OWNER } });
  const customers = [];
  for (let i=0;i<100;i++) customers.push(await prisma.customer.create({ data: { firstName:firstNames[i%firstNames.length], lastName:`${lastNames[(i*7)%lastNames.length]} ${i+1}`, email:`customer${i+1}@example.com`, phone:`219-555-${String(1000+i)}`, normalizedPhone:`219555${String(1000+i)}`, lifetimeSpend:1200+i*137, city:i%3===0?"Crown Point":"Merrillville", zip:"46307" } }));
  const vehicles = [];
  for (let i=0;i<150;i++) { const [make,model]=cars[i%cars.length]; vehicles.push(await prisma.vehicle.create({ data:{ customerId:customers[i%100].id, vin:`1RCOMPL${String(i).padStart(10,"0")}`, year:2014+(i%12), make, model, color:["Black","White","Silver","Blue"][i%4], mileage:18000+i*611 } })); }
  const statuses = Object.values(RepairOrderStatus);
  const orders=[];
  for(let i=0;i<50;i++) orders.push(await prisma.repairOrder.create({data:{number:`RO-${2400+i}`,customerId:customers[i].id,vehicleId:vehicles[i].id,advisorId:owner.id,status:statuses[i%statuses.length],concern:["Brake vibration","Check engine light","Oil service and inspection","A/C not cooling"][i%4],laborTotal:180+i*9,partsTotal:95+i*7,taxTotal:21,total:296+i*16,grossProfit:142+i*8,completedAt:i%5===0?new Date():null}}));
  for(let i=0;i<20;i++) await prisma.appointment.create({data:{customerId:customers[i+50].id,vehicleId:vehicles[i+50].id,status:AppointmentStatus.CONFIRMED,service:["Diagnostics","Maintenance","Brakes","Alignment"][i%4],startsAt:new Date(Date.now()+(i-4)*86400000)}});
  for(let i=0;i<15;i++){const [make,model]=cars[(i+2)%cars.length];await prisma.usedCar.create({data:{stockNumber:`UC-${100+i}`,vin:`2RCOMPL${String(i).padStart(10,"0")}`,year:2018+i%7,make,model,mileage:28000+i*2700,purchasePrice:8500+i*520,reconCost:780+i*55,askingPrice:12900+i*690,acquiredAt:new Date(Date.now()-i*86400000*4)}})}
  for(let i=0;i<180;i++) await prisma.sale.create({data:{customerId:customers[i%100].id,repairOrderId:i<50?orders[i].id:null,amount:420+(i%17)*83,grossProfit:210+(i%11)*41,laborAmount:245+(i%9)*29,partsAmount:175+(i%8)*31,soldAt:new Date(Date.now()-i*86400000/2)}});
  for(let i=0;i<45;i++) await prisma.call.create({data:{customerId:customers[i%100].id,phone:customers[i%100].phone,status:i%5===0?CallStatus.MISSED:CallStatus.ANSWERED,durationSeconds:i%5===0?0:65+i*13,occurredAt:new Date(Date.now()-i*3600000)}});
  await prisma.setting.create({data:{key:"business",value:{businessName:"R Complete Auto Care",address:"1305 E Summit St, Crown Point, IN 46307",phone:"(219) 262-2711",laborRate:165,taxRate:7,businessHours:{weekdays:"8:00 AM – 6:00 PM",saturday:"8:00 AM – 2:00 PM",sunday:"Closed"}}}});
  for(const provider of ["TEKMETRIC","RINGCENTRAL","GMAIL","GOOGLE_CALENDAR","QUICKBOOKS"] as const) await prisma.integrationConnection.create({data:{provider,enabled:false,healthy:false}});
  console.log("Seeded 100 customers, 150 vehicles, 50 repair orders, 20 appointments, 15 used cars, and sales history.");
}
main().finally(()=>prisma.$disconnect());
