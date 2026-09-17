"use client";

import React from "react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  withGlow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  className = "",
  withGlow = true,
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 sm:w-9 sm:h-9",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
    xl: "w-16 h-16 sm:w-20 sm:h-20",
    hero: "w-20 h-20 sm:w-24 sm:h-24",
  }[size];

  return (
    <div
      className={`relative ${sizeClasses} shrink-0 rounded-full overflow-hidden border-2 border-gold-400 bg-[#ECEAE6] ${
        withGlow ? "shadow-[0_0_25px_rgba(212,175,55,0.35)]" : "shadow-md"
      } ${className}`}
      style={{
        clipPath: "circle(50% at 50% 50%)",
        WebkitClipPath: "circle(50% at 50% 50%)",
      }}
    >
      <img
        src="/logo.jpg"
        alt="SERINMOBILIARIO Logo"
        className="w-full h-full object-cover scale-[1.32] rounded-full pointer-events-none select-none transition-transform duration-500 hover:scale-[1.38]"
        style={{
          clipPath: "circle(50% at 50% 50%)",
          WebkitClipPath: "circle(50% at 50% 50%)",
        }}
      />
    </div>
  );
};
