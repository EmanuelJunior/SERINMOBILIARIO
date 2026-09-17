"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = "lg",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Content Container */}
      <div
        className={cn(
          "relative w-full bg-cream-50 border border-gold-400/30 rounded-xs shadow-2xl z-10 overflow-hidden transform transition-all my-8",
          maxWidthStyles[maxWidth]
        )}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand-200 bg-white">
          <div>
            {title && (
              <h3 className="font-serif text-xl sm:text-2xl text-forest-900 font-semibold tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-sand-500 mt-0.5 tracking-wide">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-sand-400 hover:text-forest-900 transition-colors p-1.5 rounded-full hover:bg-sand-100"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
