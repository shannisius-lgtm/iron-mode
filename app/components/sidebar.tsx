"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  ForkKnife,
  Home,
  Settings,
  Target,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "🏠 Dashboard", href: "/", icon: Home },
  { label: "💪 Workouts", href: "/workouts", icon: Dumbbell },
  { label: "🍽 Meals", href: "/meals", icon: ForkKnife },
  { label: "📈 Progress", href: "/progress", icon: TrendingUp },
  { label: "🎯 Missions", href: "/missions", icon: Target },
  { label: "🏆 Achievements", href: "/achievements", icon: Trophy },
  { label: "⚙ Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <motion.aside
      initial={false}
      animate={{ width: open ? 280 : 80 }}
      transition={{ type: "spring", stiffness: 210, damping: 25 }}
      className="relative flex h-screen flex-col border-r border-white/10 bg-black/75 px-4 py-6 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-3xl bg-[#d4af37]/15 text-[#d4af37] shadow-[0_20px_40px_-30px_rgba(212,175,55,0.8)]">
                IM
              </div>
              {open && (
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-zinc-400">Iron Mode</p>
                  <p className="text-lg font-semibold text-white">Fitness HQ</p>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-100 transition hover:bg-white/10"
              aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
            >
              {open ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-4 rounded-[24px] px-4 py-3 text-sm transition",
                    isActive
                      ? "border border-[#d4af37]/20 bg-white/10 text-white shadow-[0_15px_35px_-20px_rgba(212,175,55,0.8)]"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-2xl",
                      isActive ? "bg-[#d4af37]/15 text-[#d4af37]" : "bg-white/5 text-zinc-300"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={cn(
                      "overflow-hidden whitespace-nowrap transition-all duration-300",
                      open ? "max-w-full opacity-100" : "max-w-0 opacity-0"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
          <p className="font-semibold text-white">Premium mode</p>
          {open && <p className="mt-2 text-sm leading-6 text-zinc-400">Use the sidebar to jump between your fitness hub sections. The design stays sleek and focused.</p>}
        </div>
      </div>
    </motion.aside>
  );
}
