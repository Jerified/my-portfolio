"use client";

import React from "react";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export default function ShinyButton({ children, className = "", ...props }: ShinyButtonProps) {
  return (
    <button
      {...props}
      className={`relative inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-black bg-gradient-to-r from-[#ffc494] to-[#feb47b] border-2 border-[#ff7e5f] overflow-hidden transition-transform duration-200 hover:scale-[1.03] focus:outline-none ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {/* shine */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)] transition-transform duration-700 ease-out hover:translate-x-full"
      />
    </button>
  );
}


