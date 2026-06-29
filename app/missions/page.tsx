import { Card } from "@/app/components/ui/card";

export default function MissionsPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-[1200px] space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Missions</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Daily Missions</h1>
          <p className="mt-4 max-w-2xl text-zinc-300">Focus on targeted actions like hydration, protein, workouts, and sleep.</p>
        </div>
        <Card className="rounded-[3rem] p-10">
          <p className="text-zinc-300">Complete your daily missions to build streaks and unlock performance rewards.</p>
        </Card>
      </section>
    </main>
  );
}
