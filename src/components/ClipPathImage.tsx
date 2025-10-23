"use client";

import React from "react";
import Image from "next/image";

interface ClipPathImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  clipPath?: "creative" | "corporate" | "symbolic" | "water-splash" | "hexagon" | "circle" | "modern" | "geometric" | "organic";
}

export const ClipPathImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  clipPath = "creative"
}: ClipPathImageProps) => {
  const getClipPathStyle = () => {
    switch (clipPath) {
      case "creative":
        return {
          clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
        };
      case "corporate":
        return {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)"
        };
      case "symbolic":
        return {
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
        };
      case "water-splash":
        return {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)"
        };
      case "hexagon":
        return {
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
        };
      case "circle":
        return {
          clipPath: "circle(50% at 50% 50%)"
        };
      case "modern":
        return {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 60%, 85% 100%, 0% 100%)"
        };
      case "geometric":
        return {
          clipPath: "polygon(25% 0%, 100% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 50%)"
        };
      case "organic":
        return {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%)"
        };
      default:
        return {
          clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
        };
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover transition-transform duration-300 hover:scale-105"
        style={getClipPathStyle()}
      />
      {/* Gradient overlay for extra effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" 
           style={getClipPathStyle()} />
    </div>
  );
};


