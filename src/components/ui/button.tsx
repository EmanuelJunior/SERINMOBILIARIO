"use client";

import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "gold-outline" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium tracking-editorial uppercase transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 rounded-sm gap-1.5",
      md: "text-xs px-6 py-3 rounded-sm gap-2 tracking-luxury",
      lg: "text-sm px-8 py-4 rounded-sm gap-2.5 tracking-luxury font-semibold",
      xl: "text-sm px-10 py-5 rounded-sm gap-3 tracking-luxury font-semibold shadow-luxury",
    };

    const variantStyles = {
      primary:
        "bg-forest-900 text-cream-50 hover:bg-forest-800 border border-forest-800 hover:border-gold-500/40 shadow-sm",
      secondary:
        "bg-forest-800/80 text-cream-100 hover:bg-forest-700 border border-forest-700/50 backdrop-blur-sm",
      gold:
        "bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-forest-950 hover:shadow-gold-glow hover:brightness-105 font-semibold",
      "gold-outline":
        "bg-transparent text-gold-500 hover:text-forest-950 border border-gold-500/80 hover:bg-gold-500 transition-all",
      outline:
        "bg-transparent text-forest-900 hover:text-forest-950 border border-sand-300 hover:border-forest-900 hover:bg-sand-100",
      ghost:
        "bg-transparent text-forest-900 hover:bg-forest-50 hover:text-forest-950",
      link:
        "bg-transparent text-gold-600 underline-offset-4 hover:underline p-0 capitalize tracking-normal",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
