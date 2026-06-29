import { Card } from "@/app/components/ui/card";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-[1200px] space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Achievements</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Earned Milestones</h1>
          <p className="mt-4 max-w-2xl text-zinc-300">Track trophies and achievements earned through workouts and nutrition consistency.</p>
        </div>
        <Card className="rounded-[3rem] p-10">
          <p className="text-zinc-300">Your earned achievements will appear here to celebrate your progress.</p>
        </Card>
      </section>
    </main>
  );
}
