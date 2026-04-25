import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "cyan" | "pink" | "purple";
  className?: string;
}

export function NeonButton({ children, variant = "cyan", className, ...props }: NeonButtonProps) {
  // We defined neon-btn-cyan and neon-btn-pink in globals.css
  const variantClass = variant === "cyan" 
    ? "neon-btn-cyan" 
    : variant === "pink" 
      ? "neon-btn-pink"
      : "neon-btn-cyan text-neon-purple border-neon-purple"; // fallback strategy

  return (
    <button
      className={cn(variantClass, className)}
      {...props}
    >
      {children}
    </button>
  );
}
