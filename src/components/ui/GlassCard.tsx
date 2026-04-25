import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function GlassCard({ children, className, glowOnHover = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      {...props}
      className={cn(
        "glass-card p-6 flex flex-col relative overflow-hidden transition-all duration-300",
        glowOnHover && "hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:-translate-y-1",
        className
      )}
    >
      {/* Optional subtle inner border highlight */}
      <div className="absolute inset-0 border border-white/5 rounded-[24px] pointer-events-none" />
      {children}
    </motion.div>
  );
}
