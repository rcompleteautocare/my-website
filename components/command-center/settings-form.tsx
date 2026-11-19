"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Save, LoaderCircle } from "lucide-react";
import { saveSettings } from "@/app/command-center/settings/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { BusinessProfile } from "@/lib/business-profile";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? <LoaderCircle className="animate-spin" size={16} /> : <Save size={16} />}
      Save changes
    </Button>
  );
}

const FIELDS: { n: keyof BusinessProfile; l: string; type?: string; step?: string }[] = [
  { n: "businessName", l: "Business name" },
  { n: "address", l: "Shop address" },
  { n: "phone", l: "Phone" },
  { n: "laborRate", l: "Labor rate ($ / hr)", type: "number", step: "0.01" },
  { n: "taxRate", l: "Tax rate (%)", type: "number", step: "0.01" },
  { n: "weekdayHours", l: "Monday–Friday" },
  { n: "saturdayHours", l: "Saturday" },
];

export function SettingsForm({ initial }: { initial: BusinessProfile }) {
  const [state, action] = useActionState(saveSettings, null);
  return (
    <form action={action} className="space-y-4">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Business profile</CardTitle>
            <p className="!m-0 mt-1 text-xs text-zinc-500">Core details used across documents and customer communications.</p>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          {FIELDS.map((f, i) => (
            <label key={f.n} className={i < 2 ? "sm:col-span-2" : ""}>
              <span className="mb-2 block text-xs font-medium text-zinc-400">{f.l}</span>
              <Input name={f.n} type={f.type} step={f.step} defaultValue={state?.values?.[f.n] ?? initial[f.n]} required />
            </label>
          ))}
        </CardContent>
      </Card>
      <div className="flex items-center justify-end gap-3">
        {state?.message && (
          <p role={state.success ? "status" : "alert"} className={`!m-0 text-xs ${state.success ? "text-emerald-400" : "text-red-400"}`}>
            {state.message}
          </p>
        )}
        <Submit />
      </div>
    </form>
  );
}
