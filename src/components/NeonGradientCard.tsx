"use client";

import React from "react";

interface NeonGradientCardProps {
  children: React.ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  borderColor?: string;
}

export const NeonGradientCard = ({
  children,
  className = "",
  gradientFrom = "from-[#ff7e5f1a]",
  gradientTo = "to-[#feb47b1a]",
  borderColor = "border-[#ff7e5f66]",
}: NeonGradientCardProps) => {
  return (
    <div
      className={`relative group overflow-hidden rounded-xl border-2 bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl ${gradientFrom} ${gradientTo} ${borderColor} hover:border-[#ff7e5f99] hover:shadow-[0_0_40px_0_#ff7e5f40] ${className}`}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff7e5f1a] via-[#feb47b1a] to-[#ffc4941a] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};
