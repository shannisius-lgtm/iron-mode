import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)] backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}
