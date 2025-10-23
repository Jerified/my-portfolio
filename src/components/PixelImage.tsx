"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface PixelImageProps {
  src: string;
  alt?: string;
  grid?: "6x4" | "8x8" | "8x3" | "4x6" | "3x8";
  customGrid?: { rows: number; cols: number };
  grayscaleAnimation?: boolean;
  pixelFadeInDuration?: number;
  maxAnimationDelay?: number;
  colorRevealDelay?: number;
  className?: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export const PixelImage: React.FC<PixelImageProps> = ({
  src,
  alt = "",
  grid = "8x8",
  customGrid,
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1500,
  className = "",
  width,
  height,
  blurDataURL,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPixels, setShowPixels] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse grid dimensions
  const getGridDimensions = () => {
    if (customGrid) {
      return { rows: customGrid.rows, cols: customGrid.cols };
    }
    
    const gridMap: Record<string, { rows: number; cols: number }> = {
      "6x4": { rows: 6, cols: 4 },
      "8x8": { rows: 8, cols: 8 },
      "8x3": { rows: 8, cols: 3 },
      "4x6": { rows: 4, cols: 6 },
      "3x8": { rows: 3, cols: 8 },
    };
    
    return gridMap[grid] || { rows: 8, cols: 8 };
  };

  const { rows, cols } = getGridDimensions();
  const totalPixels = rows * cols;

  useEffect(() => {
    if (isLoaded) {
      // Start pixel animation
      setShowPixels(true);
      
      // Start color reveal after delay
      if (grayscaleAnimation) {
        setTimeout(() => {
          setShowColor(true);
        }, colorRevealDelay);
      }
    }
  }, [isLoaded, grayscaleAnimation, colorRevealDelay]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Original image with placeholder */}
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          className={`transition-opacity duration-300 ${
            showColor ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Pixel overlay */}
      {showPixels && (
        <div 
          className="absolute inset-0 grid" 
          style={{ 
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`
          }}
        >
          {Array.from({ length: totalPixels }, (_, index) => {
            const delay = Math.random() * maxAnimationDelay;
            
            return (
              <div
                key={index}
                className="bg-gray-200"
                style={{
                  animation: `pixelFadeIn ${pixelFadeInDuration}ms ease-out ${delay}ms both`,
                  filter: grayscaleAnimation && !showColor ? "grayscale(100%)" : "none",
                }}
              />
            );
          })}
        </div>
      )}

      <style jsx>{`
        @keyframes pixelFadeIn {
          0% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};
