"use client";

import React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "forest" | "cream" | "outline" | "danger" | "success";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "gold",
  size = "md",
  ...props
}) => {
  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5 tracking-wider",
    md: "text-xs px-3 py-1 tracking-editorial",
  };

  const variantStyles = {
    gold: "bg-gold-500/90 text-forest-950 font-semibold border border-gold-400 backdrop-blur-sm",
    forest: "bg-forest-900 text-cream-100 font-medium border border-forest-700",
    cream: "bg-cream-100 text-forest-900 border border-sand-300",
    outline: "bg-forest-950/40 text-cream-100 border border-cream-100/30 backdrop-blur-md",
    danger: "bg-red-900/80 text-red-100 border border-red-700",
    success: "bg-emerald-900/80 text-emerald-100 border border-emerald-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center uppercase font-sans rounded-xs transition-colors",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
