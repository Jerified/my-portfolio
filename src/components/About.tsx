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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-20 relative z-10">
        {[
          { icon: MdSpeed, title: 'Fast', desc: 'Optimized performance & smooth interactions' },
          { icon: MdLightbulbOutline, title: 'Intuitive', desc: 'User-friendly and easy-to-navigate UI/UX' },
          { icon: MdDevices, title: 'Responsive', desc: 'Seamless experience on all devices' },
          { icon: MdRocketLaunch, title: 'Dynamic', desc: 'Engaging and interactive animations' },
        ].map(({ icon: Icon, title, desc }, index) => (
          <MagicCard key={index} className="p-6 text-center">
            <div className="flex flex-col justify-center items-center gap-3">
              <Icon className="text-6xl text-[#feb47b] p-2" />
              <h1 className="text-xl font-semibold text-white">{title}</h1>
            </div>
            <p className="text-sm text-center pt-2 text-gray-300 font-light">{desc}</p>
          </MagicCard>
        ))}
      </div>

      {/* Full-Stack & Backend Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 relative z-10">
        <div className="p-8 text-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-white/10 backdrop-blur-sm">
          <div className="flex flex-col justify-center items-center gap-3">
            <Code className="text-7xl text-[#feb47b]" />
            <h1 className="text-2xl font-semibold text-white">Full-Stack Developer</h1>
          </div>
          <p className="text-center text-gray-300 mt-3">
            I specialize in building modern web applications with efficient front-end and scalable back-end architectures.
          </p>
        </div>

        <div className="p-8 text-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-white/10 backdrop-blur-sm">
          <div className="flex flex-col justify-center items-center gap-3">
            <Database className="text-7xl text-[#feb47b]" />
            <h1 className="text-2xl font-semibold text-white">Database & API Design</h1>
          </div>
          <p className="text-center text-gray-300 mt-3">
            Proficient in designing RESTful and GraphQL APIs, managing databases like MySQL and MongoDB, and optimizing performance.
          </p>
        </div>
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
          <h3 className="pt-6 text-2xl font-bold text-white text-center">Who&apos;s this guy?</h3>
          <p className="text-base lg:text-lg pt-4 text-gray-300 text-center leading-relaxed">
            I&apos;m a Full-Stack Developer from Lagos, Nigeria.
          </p>
          <p className="text-sm lg:text-base pt-3 text-gray-400 text-center leading-relaxed">
            Passionate about building high-performance applications with seamless user experiences.
          </p>
          <div className="pt-6 text-center">
            <a href="#contact" className="inline-block text-base lg:text-lg text-[#feb47b] font-semibold cursor-pointer hover:underline transition-all duration-300 hover:text-[#d4a574]">
              Let&apos;s build something great together!
            </a>
          </div>
        </MagicCard>

        {/* Skills Section */}
        <div className="w-full my-10 lg:my-0 flex-1 relative z-10">
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default Hero
