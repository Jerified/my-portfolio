"use client";

import React from "react";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export const OrbitingCircles = ({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 0,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) => {
  return (
    <div className={`relative size-full ${className}`}>
      {path && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4,4"
            strokeWidth="1"
            className="stroke-slate-700"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => (
        <div
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `rotate(${(360 / React.Children.count(children)) * index}deg) translateX(${radius}px) rotate(${reverse ? 360 : -360}deg)`,
            animation: `orbit ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
          }}
        >
          {child}
        </div>
      ))}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(${(360 / React.Children.count(children)) * 0}deg) translateX(${radius}px) rotate(${reverse ? 360 : -360}deg);
          }
          to {
            transform: rotate(${360 + (360 / React.Children.count(children)) * 0}deg) translateX(${radius}px) rotate(${reverse ? 0 : -720}deg);
          }
        }
      `}</style>
    </div>
  );
};
