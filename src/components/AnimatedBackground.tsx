'use client';

import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#7FBF89]/20 to-[#4A90E2]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#7FBF89]/15 to-[#E24A90]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-[#4A90E2]/10 to-[#7FBF89]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-[#7FBF89]/30 rotate-45 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-[#4A90E2]/40 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-[#E24A90]/50 rotate-12 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(127, 191, 137, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127, 191, 137, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;


