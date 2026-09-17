"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/utils/cn";

export type ToastType = "success" | "error" | "info";

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
}

interface ToastContextType {
  toast: (options: { type?: ToastType; title: string; description?: string }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({
      type = "success",
      title,
      description,
    }: {
      type?: ToastType;
      title: string;
      description?: string;
    }) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, type, title, description }]);

      setTimeout(() => {
        removeToast(id);
      }, 5000);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-md w-full pointer-events-none p-4">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "pointer-events-auto flex items-start gap-3 p-4 rounded-xs border shadow-luxury backdrop-blur-md transition-all duration-300 transform translate-y-0",
              t.type === "success" && "bg-forest-950/95 border-gold-500/60 text-cream-50",
              t.type === "error" && "bg-red-950/95 border-red-700/60 text-cream-50",
              t.type === "info" && "bg-forest-900/95 border-sand-400/40 text-cream-50"
            )}
          >
            {t.type === "success" && (
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            )}
            {t.type === "error" && (
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            )}
            {t.type === "info" && (
              <Info className="w-5 h-5 text-sand-300 shrink-0 mt-0.5" />
            )}

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                {t.title}
              </h4>
              {t.description && (
                <p className="text-xs text-cream-200/90 mt-1 leading-relaxed">
                  {t.description}
                </p>
              )}
            </div>

            <button
              onClick={() => removeToast(t.id)}
              className="text-cream-200/50 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast debe ser utilizado dentro de un ToastProvider");
  }
  return context;
};
