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
    sm: "w-12 h-12",
    md: "w-16 h-16 sm:w-20 sm:h-20",
    lg: "w-20 h-20 sm:w-24 sm:h-24",
    xl: "w-24 h-24 sm:w-32 sm:h-32",
    hero: "w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40",
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
