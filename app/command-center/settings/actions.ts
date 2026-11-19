"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/auth";
import { getPrisma } from "@/lib/prisma";
import { BUSINESS_PROFILE_KEY } from "@/lib/business-profile";

const schema = z.object({
  businessName: z.string().min(2),
  address: z.string().min(5),
  phone: z.string().min(10),
  laborRate: z.coerce.number().positive(),
  taxRate: z.coerce.number().min(0).max(25),
  weekdayHours: z.string().min(3),
  saturdayHours: z.string().min(3),
});

// `values` echoes what was submitted so the form can keep it on screen: React
// resets an uncontrolled form after its action runs.
export type SaveSettingsState = { success: boolean; message: string; values?: Record<string, string> } | null;

export async function saveSettings(_: unknown, formData: FormData): Promise<SaveSettingsState> {
  // Server actions are public POST endpoints: anyone who knows the action id
  // can call this without ever loading the Command Center, so the layout's
  // auth check does not protect it. Check the session here.
  const values = Object.fromEntries([...formData].filter((entry): entry is [string, string] => typeof entry[1] === "string" && !entry[0].startsWith("$")));
  const session = await auth();
  if (!session?.user) {
    return { success: false, message: "Your session has expired. Sign in again to save settings.", values };
  }
  if (session.user.role !== "OWNER") {
    return { success: false, message: "Only the owner can change business settings.", values };
  }

  const result = schema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return { success: false, message: "Please review the highlighted business details.", values };
  }

  // Only report success once the row is actually written.
  try {
    await getPrisma().setting.upsert({
      where: { key: BUSINESS_PROFILE_KEY },
      create: { key: BUSINESS_PROFILE_KEY, value: result.data },
      update: { value: result.data },
    });
  } catch (error) {
    console.error("saveSettings: could not persist business settings", error);
    return { success: false, message: "Not saved. The settings database could not be reached, so nothing was changed.", values };
  }

  // Re-render the settings page so the form shows the stored values.
  revalidatePath("/command-center/settings");
  return { success: true, message: "Business settings saved.", values };
}
