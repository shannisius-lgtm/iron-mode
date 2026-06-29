import { Card } from "@/app/components/ui/card";

export default function WorkoutsPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-[1200px] space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Workouts</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Training Session</h1>
          <p className="mt-4 max-w-2xl text-zinc-300">Track exercises, sets, reps, and weight to stay on top of your progress.</p>
        </div>
        <Card className="rounded-[3rem] p-10">
          <p className="text-zinc-300">This page is the home for workout logging, routines, and strength tracking.</p>
        </Card>
      </section>
    </main>
  );
}
