"use client";

import React from "react";

interface ShaderLikeBackgroundProps {
  className?: string;
}

export default function ShaderLikeBackground({ className = "" }: ShaderLikeBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {/* Layer 1: static gradient backdrop */}
      <div className={`absolute inset-0 shader-gradient-dark`} />

      {/* Layer 2: subtle vignette */}
      <div className={`absolute inset-0 shader-vignette-dark`} />

      {/* Layer 3: grain */}
      <div className={`absolute inset-0 shader-grain mix-blend-overlay opacity-[0.5]`} />

      <style jsx global>{`
        .shader-gradient-dark {
          /* Dark theme gradients - muted ash tones */
          background:
            radial-gradient(1000px 700px at 65% 30%, #a67c6a22 0%, transparent 60%),
            radial-gradient(800px 600px at 30% 70%, #8b6f4720 0%, transparent 55%),
            radial-gradient(700px 500px at 70% 70%, #7a5f3f1a 0%, transparent 60%),
            linear-gradient(135deg, #0f0f10 0%, #0d0d0f 60%, #0a0a0a 100%);
          filter: saturate(0.8);
        }


        .shader-vignette-dark {
          background: radial-gradient(95% 85% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 100%);
        }

        .shader-vignette-light {
          background: radial-gradient(95% 85% at 50% 50%, rgba(255,255,255,0) 0%, rgba(0,0,0,0.03) 100%);
        }

        .shader-grain {
          background-image: url("data:image/svg+xml;utf8,\
            <svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'>\
              <filter id='n'>\
                <feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/>\
                <feColorMatrix type='saturate' values='0'/>\
              </filter>\
              <rect width='100%' height='100%' filter='url(%23n)' opacity='0.8'/>\
            </svg>");
          background-size: 196px 196px;
          mix-blend-mode: soft-light;
        }
      `}</style>
    </div>
  );
}


