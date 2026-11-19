import { SettingsForm } from "@/components/command-center/settings-form";
import { getPrisma } from "@/lib/prisma";
import { BUSINESS_PROFILE_KEY, DEFAULT_BUSINESS_PROFILE, toBusinessProfile, type BusinessProfile } from "@/lib/business-profile";

// Reads the saved profile on every request so the form shows what is actually
// stored, not a hard-coded copy.
export const dynamic = "force-dynamic";

async function loadProfile(): Promise<{ profile: BusinessProfile; loadError: boolean }> {
  try {
    const row = await getPrisma().setting.findUnique({ where: { key: BUSINESS_PROFILE_KEY } });
    return { profile: toBusinessProfile(row?.value), loadError: false };
  } catch (error) {
    console.error("settings: could not load business profile", error);
    return { profile: DEFAULT_BUSINESS_PROFILE, loadError: true };
  }
}

export default async function Page() {
  const { profile, loadError } = await loadProfile();
  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Settings</h2>
        <p className="!m-0 mt-1 text-sm text-zinc-500">Configure your shop, team, billing, and operating preferences.</p>
      </div>
      {loadError && (
        <p role="alert" className="!m-0 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-400">
          Saved settings could not be loaded from the database. The values below are defaults, and saving may fail until the database is reachable.
        </p>
      )}
      <SettingsForm initial={profile} />
    </div>
  );
}
