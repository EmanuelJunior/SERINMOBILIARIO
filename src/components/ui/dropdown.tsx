"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export interface DropdownOption {
  label: string;
  value: string;
  badge?: string;
}

export interface DropdownProps {
  label?: string;
  placeholder?: string;
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  icon?: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder = "Seleccionar...",
  options,
  value,
  onChange,
  className,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative w-full space-y-1.5", className)} ref={dropdownRef}>
      {label && (
        <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between bg-cream-50/70 text-forest-950 text-sm px-4 py-3 rounded-sm border border-sand-300 text-left transition-all duration-200 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 focus:bg-white",
          isOpen && "border-gold-500 ring-2 ring-gold-400/20 bg-white"
        )}
      >
        <div className="flex items-center gap-2 truncate">
          {icon && <span className="text-forest-700/60">{icon}</span>}
          <span className={cn("truncate", !selectedOption && "text-sand-500")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-forest-700/60 transition-transform duration-200 flex-shrink-0 ml-2",
            isOpen && "transform rotate-180 text-gold-600"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute z-40 w-full mt-1 bg-white border border-sand-200 rounded-sm shadow-luxury py-1 max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={cn(
                "w-full flex items-center justify-between px-4 py-2.5 text-xs tracking-wide text-left transition-colors hover:bg-cream-100",
                option.value === value
                  ? "bg-forest-50 text-forest-900 font-semibold border-l-2 border-gold-500"
                  : "text-forest-900/80"
              )}
            >
              <span>{option.label}</span>
              {option.badge && (
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-sand-100 text-forest-800">
                  {option.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
