"use client";

import React from "react";
import { cn } from "@/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "gold" | "dark";
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  hoverEffect = false,
  ...props
}) => {
  const variantStyles = {
    default: "bg-white border border-sand-200 shadow-sm",
    elevated: "bg-white border border-sand-200/80 shadow-luxury",
    bordered: "bg-transparent border border-sand-300",
    gold: "bg-cream-50/60 border border-gold-300/50 shadow-sm",
    dark: "bg-forest-950 text-cream-50 border border-forest-800/80 shadow-luxury",
  };

  return (
    <div
      className={cn(
        "rounded-sm overflow-hidden transition-all duration-300",
        variantStyles[variant],
        hoverEffect && "hover:-translate-y-1 hover:shadow-luxury-hover hover:border-gold-500/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
