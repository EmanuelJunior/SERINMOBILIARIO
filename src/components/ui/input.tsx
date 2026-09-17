"use client";

import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, icon, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-medium uppercase tracking-wider text-forest-900/80"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-3.5 flex items-center pointer-events-none text-forest-700/50">
              {icon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full bg-cream-50/70 text-forest-950 placeholder:text-sand-500 text-sm px-4 py-3 rounded-sm border border-sand-300 transition-all duration-200 ease-in-out focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed",
              icon ? "pl-11" : "pl-4",
              error && "border-red-500 focus:border-red-500 focus:ring-red-200",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-sand-500 mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
