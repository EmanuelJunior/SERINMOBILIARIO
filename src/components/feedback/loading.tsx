import React from "react";
import { cn } from "@/utils/cn";

export interface LoadingProps {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Loading: React.FC<LoadingProps> = ({
  label = "Cargando...",
  className,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center p-8 gap-3", className)}>
      <div
        className={cn(
          "rounded-full border-forest-900/20 border-t-gold-500 animate-spin",
          sizeClasses[size]
        )}
      />
      {label && (
        <span className="text-xs uppercase tracking-luxury text-forest-800/80 font-medium">
          {label}
        </span>
      )}
    </div>
  );
};

export const PropertyCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-sm border border-sand-200 overflow-hidden animate-pulse">
      <div className="h-64 bg-sand-200" />
      <div className="p-6 space-y-4">
        <div className="h-4 bg-sand-200 rounded w-1/3" />
        <div className="h-6 bg-sand-200 rounded w-3/4" />
        <div className="h-5 bg-sand-200 rounded w-1/2" />
        <div className="flex gap-4 pt-2 border-t border-sand-100">
          <div className="h-4 bg-sand-200 rounded w-1/4" />
          <div className="h-4 bg-sand-200 rounded w-1/4" />
          <div className="h-4 bg-sand-200 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
};
