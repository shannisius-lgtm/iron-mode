import { Card } from "@/app/components/ui/card";

export default function SettingsPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-[1200px] space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Settings</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">App Preferences</h1>
          <p className="mt-4 max-w-2xl text-zinc-300">Configure your profile, notifications, and personalization settings.</p>
        </div>
        <Card className="rounded-[3rem] p-10">
          <p className="text-zinc-300">This page will contain preferences for Iron Mode behavior and personalization.</p>
        </Card>
      </section>
    </main>
  );
}
