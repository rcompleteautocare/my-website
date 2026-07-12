"use server"; import { z } from "zod";
const schema=z.object({businessName:z.string().min(2),address:z.string().min(5),phone:z.string().min(10),laborRate:z.coerce.number().positive(),taxRate:z.coerce.number().min(0).max(25),weekdayHours:z.string().min(3),saturdayHours:z.string().min(3)});
export async function saveSettings(_:unknown,formData:FormData){const result=schema.safeParse(Object.fromEntries(formData));if(!result.success)return{success:false,message:"Please review the highlighted business details."};return{success:true,message:"Business settings saved."};}
