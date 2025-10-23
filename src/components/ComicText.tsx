"use client";

import React from "react";

interface ComicTextProps {
  children: string;
  fontSize?: number; // in rem, similar to Magic UI prop
  className?: string;
}

export function ComicText({ children, fontSize = 6, className = "" }: ComicTextProps) {
  return (
    <div className={`select-none ${className}`} style={{ lineHeight: 1 }}>
      <span
        className="inline-block font-extrabold tracking-wide uppercase text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]"
        style={{
          color: "#ffffff",
          WebkitTextStroke: "2px #0a0a0b",
          textShadow:
            "4px 4px 0 #ff7e5f, -4px -4px 0 #feb47b, 0 0 24px rgba(255,126,95,0.35)",
        }}
      >
        {children}
      </span>
    </div>
  );
}




