import { motion } from "framer-motion";
import { DashboardMetric } from "@/app/components/dashboard-metric";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Sparkles, Heart } from "lucide-react";

const dailyMissions = [
  { label: "Drink water", completed: false },
  { label: "Hit protein goal", completed: true },
  { label: "Workout", completed: true },
  { label: "Sleep 8 hours", completed: false },
];

const favoriteMeals = [
  { name: "Gold Protein Bowl", calories: 560, time: "Lunch" },
  { name: "Morning Oats", calories: 320, time: "Breakfast" },
];

const workouts = [
  { name: "Pull-ups", sets: 5, reps: 8, weight: "Bodyweight" },
  { name: "Deadlift", sets: 4, reps: 6, weight: "225 lbs" },
];

const progressStats = [
  { label: "Weight", value: "180 lbs" },
  { label: "Body Fat", value: "14%" },
  { label: "Chest", value: "42 in" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_40%),linear-gradient(180deg,_#0a0a0a_0%,_#050505_100%)] px-6 py-8 text-white sm:px-10 lg:px-16">
      <section className="mx-auto flex max-w-[1600px] flex-col gap-10">
        <header className="flex flex-col gap-5 rounded-[3rem] border border-white/10 bg-black/60 p-8 shadow-[0_45px_110px_-70px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Iron Mode</p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">The modern fitness HQ for every day.</h1>
            <p className="mt-4 max-w-2xl text-zinc-300">Track calories, workouts, progress, and daily missions with a black, white, and gold experience built for consistency.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button>Go to dashboard</Button>
            <Button className="bg-[#d4af37] text-black hover:bg-[#c49f2a]">Start new goal</Button>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="grid gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Daily summary</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Today’s performance</h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">Streak 14d</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <DashboardMetric label="Calories" value="1,840 / 2,300" />
                <DashboardMetric label="Protein" value="142g / 170g" />
                <DashboardMetric label="Water" value="3.2L / 4L" />
                <DashboardMetric label="XP" value="9,340" accent="border-[#d4af37]/40 bg-[#d4af37]/10" />
              </div>
            </Card>

            <Card className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Mission control</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Daily missions</h2>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300">4 items</span>
              </div>
              <div className="space-y-3">
                {dailyMissions.map((mission) => (
                  <div key={mission.label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[#d4af37]">
                        <Sparkles className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-medium text-white">{mission.label}</p>
                        <p className="text-sm text-zinc-400">{mission.completed ? "Complete" : "In progress"}</p>
                      </div>
                    </div>
                    <div className={mission.completed ? "text-[#d4af37]" : "text-zinc-500"}>
                      {mission.completed ? "✓" : "●"}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Level progress</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Level 12</h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">Next 160 XP</div>
            </div>
            <div className="rounded-[30px] bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between text-sm text-zinc-300">
                <span>XP earned</span>
                <span>5,080 / 10,000</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[50%] rounded-full bg-[#d4af37] transition-all duration-300" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm text-zinc-400">Level</p>
                <p className="mt-2 text-3xl font-semibold text-white">12</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm text-zinc-400">Daily streak</p>
                <p className="mt-2 text-3xl font-semibold text-white">14 days</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Food Logger</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Add a meal</h2>
              </div>
              <Button className="bg-white/10">New entry</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="meal-name">Meal name</Label>
                <Input id="meal-name" placeholder="e.g. Salmon Power Plate" />
              </div>
              <div>
                <Label htmlFor="meal-calories">Calories</Label>
                <Input id="meal-calories" placeholder="540" type="number" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <Label htmlFor="meal-protein">Protein</Label>
                <Input id="meal-protein" placeholder="g" type="number" />
              </div>
              <div>
                <Label htmlFor="meal-carbs">Carbs</Label>
                <Input id="meal-carbs" placeholder="g" type="number" />
              </div>
              <div>
                <Label htmlFor="meal-fat">Fat</Label>
                <Input id="meal-fat" placeholder="g" type="number" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {favoriteMeals.map((meal) => (
                <div key={meal.name} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{meal.name}</p>
                      <p className="text-sm text-zinc-400">{meal.time}</p>
                    </div>
                    <p className="text-right text-sm text-zinc-300">{meal.calories} kcal</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-6">
            <Card className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Workout Tracker</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Session details</h2>
                </div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300">2 workouts</div>
              </div>
              <div className="space-y-4">
                {workouts.map((workout) => (
                  <div key={workout.name} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-white">{workout.name}</p>
                        <p className="text-sm text-zinc-400">{workout.sets} sets × {workout.reps} reps</p>
                      </div>
                      <p className="text-sm text-zinc-300">{workout.weight}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center justify-between text-zinc-300">
                  <p>Pull-up tracker</p>
                  <p className="font-semibold text-white">14 / 20</p>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[70%] rounded-full bg-[#d4af37]/80" />
                </div>
              </div>
            </Card>

            <Card className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Progress</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Body metrics</h2>
                </div>
                <Button className="bg-white/10">Add photo</Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {progressStats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-sm text-zinc-400">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-[#d4af37]">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Weekly check-in</p>
                    <p className="text-sm text-zinc-400">Log weight, measurements, and progress photos to stay accountable.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </section>
    </main>
  );
}
