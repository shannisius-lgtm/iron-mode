"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DashboardMetricProps {
  label: string;
  value: string;
  accent?: string;
}

export function DashboardMetric({ label, value, accent }: DashboardMetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.6)]",
        accent
      )}
    >
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
    </motion.div>
  );
}
