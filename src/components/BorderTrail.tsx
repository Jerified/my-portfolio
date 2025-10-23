"use client";

import React from "react";

interface BorderTrailProps {
  size?: number; // thickness of animated trail glow
  className?: string;
  style?: React.CSSProperties;
}

export default function BorderTrail({ size = 60, className = "", style }: BorderTrailProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 rounded-xl ${className}`}
      style={style}
    >
      <div className="absolute inset-0 rounded-xl border border-white/10" />
      {/* animated trail */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div
          className="absolute -inset-[2px] rounded-xl"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, rgba(255,126,95,0.0), rgba(255,126,95,0.5), rgba(255,126,95,0.0))",
            filter: `blur(${Math.max(8, size / 6)}px)`,
            animation: "bt-rotate 6s linear infinite",
            opacity: 0.6,
          }}
        />
      </div>
      <style jsx global>{`
        @keyframes bt-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}


