"use client";

import React from "react";

interface LightRaysProps {
  count?: number;
  color?: string;
  blur?: number;
  opacity?: number;
  speed?: number;
  length?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const LightRays = ({
  count = 3,
  color = "rgba(212, 165, 116, 0.12)",
  blur = 48,
  opacity = 0.4,
  speed = 18,
  length = "60vh",
  className = "",
  style = {}
}: LightRaysProps) => {
  const rayColor = color;
  const rays = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: (i / count) * speed,
    duration: speed + Math.random() * 2 - 1,
    left: Math.random() * 100,
    width: Math.random() * 3 + 1,
  }));

  return (
    <>
      <style jsx global>{`
        @keyframes lightRay {
          0%, 100% {
            transform: translateY(-100%) scaleY(0);
            opacity: 0;
          }
          10% {
            opacity: ${opacity};
          }
          90% {
            opacity: ${opacity};
          }
          50% {
            transform: translateY(0) scaleY(1);
          }
        }
      `}</style>
      <div 
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={style}
      >
        {rays.map((ray) => (
          <div
            key={ray.id}
            className="absolute top-0"
            style={{
              left: `${ray.left}%`,
              width: `${ray.width}px`,
              height: typeof length === "number" ? `${length}px` : length,
              background: `linear-gradient(to bottom, ${rayColor}, transparent)`,
              filter: `blur(${blur}px)`,
              opacity: opacity,
              animation: `lightRay ${ray.duration}s ease-in-out infinite`,
              animationDelay: `${ray.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};
