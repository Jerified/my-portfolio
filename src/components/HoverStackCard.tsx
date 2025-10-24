'use client'

import React, { useState } from 'react'

interface HoverStackCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href?: string
  isDark?: boolean
  className?: string
}

export const HoverStackCard: React.FC<HoverStackCardProps> = ({
  title,
  description,
  icon,
  href = '#',
  isDark = false,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const highlightColor = isDark ? '#d4a574' : '#feb47b'
  
  return (
    <div className={`card-container flex-[250px] mx-4 my-8 sm:mx-6 sm:my-12 ${className}`}>
      <div 
        className="card relative font-bold w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Third layer - Glass effect (moves first) - Purple theme */}
        <div 
          className="absolute w-full h-full left-0 top-0 border-2 border-dashed -z-30 backdrop-blur-sm transition-all duration-300 ease-out"
          style={{
            transform: isHovered ? 'translate(30px, 30px)' : 'translate(20px, 20px)',
            borderRadius: '12px',
            borderColor: isDark ? '#8b5cf6' : '#a855f7',
            background: isDark 
              ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)'
              : 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(139, 92, 246, 0.12) 100%)'
          }}
        />
        
        {/* Second layer - Noisy background (follows with delay) - Teal theme */}
        <div 
          className="absolute w-full h-full left-0 top-0 border-2 border-dashed -z-20 transition-all duration-300 ease-out"
          style={{
            transform: isHovered ? 'translate(15px, 15px)' : 'translate(10px, 10px)',
            borderRadius: '12px',
            borderColor: isDark ? '#14b8a6' : '#0d9488',
            transitionDelay: '50ms',
            background: `
              radial-gradient(circle at 20% 50%, ${isDark ? 'rgba(20, 184, 166, 0.18)' : 'rgba(13, 148, 136, 0.22)'} 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, ${isDark ? 'rgba(13, 148, 136, 0.15)' : 'rgba(20, 184, 166, 0.18)'} 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, ${isDark ? 'rgba(20, 184, 166, 0.12)' : 'rgba(13, 148, 136, 0.16)'} 0%, transparent 50%),
              linear-gradient(45deg, ${isDark ? 'rgba(20, 184, 166, 0.08)' : 'rgba(13, 148, 136, 0.12)'} 25%, transparent 25%, transparent 75%, ${isDark ? 'rgba(20, 184, 166, 0.08)' : 'rgba(13, 148, 136, 0.12)'} 75%),
              linear-gradient(-45deg, ${isDark ? 'rgba(13, 148, 136, 0.06)' : 'rgba(20, 184, 166, 0.1)'} 25%, transparent 25%, transparent 75%, ${isDark ? 'rgba(13, 148, 136, 0.06)' : 'rgba(20, 184, 166, 0.1)'} 75%)
            `,
            backgroundSize: '12px 12px, 12px 12px, 12px 12px, 6px 6px, 6px 6px'
          }}
        />
        
        {/* Main card - Front layer (follows last) */}
        <a 
          href={href}
          className="block w-full h-[320px] border-2 no-underline relative z-10 transition-all duration-300 ease-out"
          style={{
            padding: '24px',
            textDecoration: 'none',
            color: isDark ? '#e5e7eb' : '#1a1a1a',
            backgroundColor: isDark ? '#1a1a1a' : '#d4a574',
            borderColor: isHovered ? highlightColor : (isDark ? '#d4a574' : '#b8860b'),
            borderRadius: '12px',
            transform: isHovered ? 'translate(-15px, -15px)' : 'translate(0px, 0px)',
            transitionDelay: '100ms',
            background: isDark 
              ? `
                linear-gradient(135deg, #1a1a1a 0%, #0f0f10 100%),
                radial-gradient(circle at 30% 40%, rgba(212, 165, 116, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(196, 155, 106, 0.04) 0%, transparent 50%),
                linear-gradient(45deg, rgba(212, 165, 116, 0.03) 25%, transparent 25%, transparent 75%, rgba(212, 165, 116, 0.03) 75%),
                linear-gradient(-45deg, rgba(196, 155, 106, 0.02) 25%, transparent 25%, transparent 75%, rgba(196, 155, 106, 0.02) 75%)
              `
              : `
                linear-gradient(135deg, #d4a574 0%, #c49b6a 100%),
                radial-gradient(circle at 30% 40%, rgba(184, 134, 11, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
                linear-gradient(45deg, rgba(184, 134, 11, 0.08) 25%, transparent 25%, transparent 75%, rgba(184, 134, 11, 0.08) 75%),
                linear-gradient(-45deg, rgba(196, 155, 106, 0.06) 25%, transparent 25%, transparent 75%, rgba(196, 155, 106, 0.06) 75%)
              `,
            backgroundSize: '100% 100%, 15px 15px, 15px 15px, 8px 8px, 8px 8px'
          }}
        >
          {/* Display content - shown by default */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
              isHovered ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="text-5xl mb-4 transition-all duration-500 ease-out">
              {icon}
            </div>
            <h2 className="text-xl font-bold text-center transition-all duration-500 ease-out" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {title}
            </h2>
          </div>

          {/* Hover content - hidden by default */}
          <div 
            className={`absolute inset-0 flex flex-col justify-center p-6 transition-all duration-500 ease-out ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-xl font-bold mb-3 transition-all duration-500 ease-out" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {title}
            </h2>
            <p className="text-sm leading-relaxed transition-all duration-500 ease-out" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {description}
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
