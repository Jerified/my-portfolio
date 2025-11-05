'use client'

import React from 'react'
import { MdSpeed, MdLightbulbOutline, MdDevices, MdRocketLaunch } from 'react-icons/md'
import { Code, Database, Server, Users } from 'lucide-react'
import Image from 'next/image'
// @ts-ignore
import { SkillBars } from 'react-skills'
import Skills from './Skills'
import { MagicCard } from './MagicCard'
import { NeonGradientCard } from './NeonGradientCard'
import { Meteors } from './Meteors'
import { ClipPathImage } from './ClipPathImage'
import FileTreeDemo from './FileTreeDemo'
import CodeComparisonDemo from './CodeComparisonDemo'
import { HoverStackCard } from './HoverStackCard'
import { RemoteWorkMap } from './RemoteWorkMap'

const skills = [
  { name: 'CSS', level: 90, color: '#2c5282' },
  { name: 'HTML', level: 90, color: '#2c5282' },
  { name: 'JavaScript', level: 80, color: '#2c5282' },
  { name: 'React', level: 80, color: '#2c5282' },
  { name: 'Next.js', level: 85, color: '#2c5282' },
  { name: 'TypeScript', level: 65, color: '#2c5282' },
  { name: 'Node.js', level: 60, color: '#2c5282' },
  { name: 'Tailwindcss', level: 90, color: '#2c5282' },
  { name: 'MongoDB', level: 70, color: '#2c5282' },
  { name: 'Go', level: 70, color: '#2c5282' },
  { name: 'MySQL', level: 75, color: '#2c5282' },
]

const Hero = () => {
  return (
        <div id="about" className="text-white dark:text-white light:text-gray-900 max-w-4xl xl:max-w-6xl mx-auto pt-10 px-4 relative scroll-mt-28">
      <div className="flex flex-col items-center gap-4 justify-center relative z-10">
        <h1 className="text-4xl text-[#d4a574] dark:text-[#d4a574] light:text-[#b8860b] tracking-widest" data-section-title>ABOUT ME</h1>
        <div className="border-white dark:border-white light:border-gray-900 border-2 w-16"></div>
      </div>

      {/* Frontend Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 mt-20 relative z-10">
        {[
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16">
                <path fill="currentColor" d="M15 22.007H5v-2h10ZM22 4l-4.735 5.955l-.22.27l-5.63 7.19a2.001 2.001 0 1 1-2.83-2.83ZM2.645 7.234A10.84 10.84 0 0 0 1.19 15H2v-1a9.7 9.7 0 0 1 1.69-5.52ZM12 2a10.96 10.96 0 0 0-8.119 3.597L5.025 6.96A7.43 7.43 0 0 1 10 5a7.43 7.43 0 0 1 4.997 1.978l3.55-2.802A10.94 10.94 0 0 0 12 2m6.83 9.2l-.233.287l-.728.93A10 10 0 0 1 18 14v1h4.81a10.88 10.88 0 0 0-1.183-7.318Z"/>
              </svg>
            ), 
            title: 'Fast', 
            desc: 'Optimized performance & smooth interactions' 
          },
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14"/>
                  <path d="M7.383 17.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974ZM15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-5"/>
                </g>
              </svg>
            ), 
            title: 'Intuitive', 
            desc: 'User-friendly and easy-to-navigate UI/UX' 
          },
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16">
                <defs>
                  <path id="SVGbWqObd2e" d="M15 9h8v12h-8z"/>
                </defs>
                <g fill="none">
                  <use href="#SVGbWqObd2e"/>
                  <path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M11 18H2V3h20v2M6 21h5"/>
                  <g stroke="currentColor" strokeLinecap="square" strokeWidth="2">
                    <use href="#SVGbWqObd2e"/>
                    <path d="M18.998 17.998h.004v.004h-.004z"/>
                  </g>
                </g>
              </svg>
            ), 
            title: 'Responsive', 
            desc: 'Seamless experience on all devices' 
          },
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className="w-12 h-12 md:w-16 md:h-16">
                <path fill="currentColor" d="M477.64 38.26a4.75 4.75 0 0 0-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 0 0-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0 0 10.55 11.2l87.31-9.63a194 194 0 0 0 1.19 19.7a19.53 19.53 0 0 0 5.7 12L170.7 375a19.6 19.6 0 0 0 12 5.7a194 194 0 0 0 19.59 1.19l-9.58 87.2a9.65 9.65 0 0 0 11.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5c8.4-19.27 10.12-41.77 8.18-64.27a317.7 317.7 0 0 0 42.21-35.64C441 232.05 491.74 99.74 477.64 38.26M294.07 217.93a48 48 0 1 1 67.86 0a47.95 47.95 0 0 1-67.86 0"/>
                <path fill="currentColor" d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46c-23.77 4.05-44.76-16.49-40.49-40.52c1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 0 0-3.65-7.45a60 60 0 0 0-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.7 59.7 0 0 0 176 403.09c.37-4.18-4.72-6.67-7.6-3.66"/>
              </svg>
            ), 
            title: 'Dynamic', 
            desc: 'Engaging and interactive animations' 
          },
        ].map(({ icon, title, desc }, index) => (
          <MagicCard key={index} className="group cursor-pointer p-2 rounded-2xl">
            <div className="relative rounded-2xl ring-1 ring-white/10 p-3 bg-transparent">
              {/* corner accents */}
              <span className="absolute -top-1 -left-1 h-3 w-5 -rotate-12 bg-transparent rounded-sm border border-[#feb47b]/30" />
              <span className="absolute -top-1 -right-1 h-3 w-5 rotate-12 bg-transparent rounded-sm border border-[#feb47b]/30" />
              <span className="absolute -bottom-1 -left-1 h-3 w-5 rotate-12 bg-transparent rounded-sm border border-[#feb47b]/30" />
              <span className="absolute -bottom-1 -right-1 h-3 w-5 -rotate-12 bg-transparent rounded-sm border border-[#feb47b]/30" />

              {/* inner panel */}
              <div className="rounded-xl ring-1 ring-white/5 p-4 md:p-6 text-center bg-transparent shadow-[inset_0_10px_30px_rgba(0,0,0,0.18)]">
                <div className="flex flex-col justify-center items-center gap-2 md:gap-3">
                  <div className={`text-[#feb47b] transition-all duration-300 ${
                    index === 0 ? 'group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_30px_rgba(255,255,0,0.8)] group-hover:scale-110' :
                    index === 1 ? 'group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_25px_rgba(255,255,0,0.7)] group-hover:scale-110 group-hover:animate-pulse' :
                    index === 2 ? 'group-hover:text-blue-400 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-110 group-hover:rotate-12' :
                    'group-hover:text-orange-400 group-hover:drop-shadow-[0_0_30px_rgba(255,165,0,0.8)] group-hover:scale-125 group-hover:-translate-y-2 group-hover:animate-bounce'
                  }`}>
                    {icon}
                  </div>
                  <h1 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#ff7e5f] transition-colors duration-300">{title}</h1>
                  <p className="text-xs md:text-sm text-center text-gray-300 font-light group-hover:text-gray-200 transition-colors duration-300">{desc}</p>
                </div>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>

      {/* Full-Stack & Backend Highlights */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 relative z-10">
        <HoverStackCard
          title="Full-Stack Developer"
          description="I specialize in building modern web applications with efficient front-end and scalable back-end architectures. From React components to Node.js APIs, I create seamless full-stack solutions."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" className="w-16 h-16">
              <path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3M716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8z"/>
            </svg>
          }
          isDark={false}
        />

        <HoverStackCard
          title="Database & API Design"
          description="Proficient in designing RESTful and GraphQL APIs, managing databases like MySQL and MongoDB, and optimizing performance. I create robust data architectures that scale with your business needs."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="w-16 h-16">
              <path fill="currentColor" d="M21 3H11c-1.1 0-2 .9-2 2v22c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M11 5h10v6H11zm0 8h10v6H11zm0 14v-6h10v6zM2 10v16c0 1.1.9 2 2 2h3v-2H4v-4h3v-2H4v-4h3v-2H4v-4h3V8H4c-1.1 0-2 .9-2 2m26-2h-3v2h3v4h-3v2h3v4h-3v2h3v4h-3v2h3c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M14 9c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0 8c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0 8c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"/>
            </svg>
          }
          isDark={true}
        />
          </div>

      {/* Demos: File Tree and Code Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 relative z-10">
        <FileTreeDemo />
        <CodeComparisonDemo />
        </div>

      {/* Work Anywhere Map */}
      <div className="mt-16 relative z-10">
      </div>

      {/* Who's This Guy Section */}
      <div className="w-full xl:grid grid-cols-2 gap-8 pt-12 my-auto xl:items-center relative z-10">
        <MagicCard className="flex flex-col justify-center items-center flex-1 p-8">
          <div className="mb-6 flex justify-center items-center">
            <div className="relative">
              {/* Orange background with clip-path */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#feb47b] to-[#d4a574] opacity-20"
                style={{
                  clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                  transform: "scale(1.1)"
                }}
              />
              <ClipPathImage 
                src="/profile.png" 
                alt="Jeremiah Profile" 
                width={300} 
                height={300}
                clipPath="creative"
                className="shadow-2xl mx-auto border-2 border-[#feb47b]/30 bg-gradient-to-br from-[#feb47b]/10 to-[#d4a574]/10 p-2 relative z-10"
              />
            </div>
          </div>
          <h3 className="pt-6 text-2xl font-bold text-white text-center">Meet Jeremiah</h3>
          <p className="text-base lg:text-lg pt-4 text-gray-300 text-center leading-relaxed">
            Full‑Stack Developer based in Lagos, building for the web worldwide.
          </p>
          <p className="text-sm lg:text-base pt-3 text-gray-400 text-center leading-relaxed">
            I craft fast, accessible interfaces and scalable back‑ends that feel effortless to use.
          </p>
          <div className="pt-6 text-center">
            <a href="#contact" className="inline-block text-base lg:text-lg text-[#feb47b] font-semibold cursor-pointer hover:underline transition-all duration-300 hover:text-[#d4a574]">
              Let&apos;s build something remarkable
            </a>
        </div>
        </MagicCard>

        {/* Skills Section */}
        <div className="w-full my-10 lg:my-0 flex-1 relative z-10">
          <Skills />
        </div>
      </div>

      {/* Remote Work Map Section */}
      <div className="mt-16 relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">🌍 Remote Work Ready</h3>
          <p className="text-gray-300">Available across multiple timezones for global collaboration</p>
        </div>
        <RemoteWorkMap />
      </div>
    </div>
  )
}

export default Hero
