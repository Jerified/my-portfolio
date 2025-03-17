'use client'

import React from 'react'
import { MdSpeed, MdLightbulbOutline, MdDevices, MdRocketLaunch } from 'react-icons/md'
import { Code, Database, Server, Users } from 'lucide-react'
import Image from 'next/image'
// @ts-ignore
import { SkillBars } from 'react-skills'
import Skills from './Skills'

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
    <div id="about" className="text-white max-w-4xl xl:max-w-6xl mx-auto pt-10 px-4">
      <div className="flex flex-col items-center gap-4 justify-center">
        <h1 className="text-4xl text-[#7FBF89] tracking-widest">ABOUT ME</h1>
        <div className="border-white border-2 w-16"></div>
      </div>

      {/* Frontend Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
        {[
          { icon: MdSpeed, title: 'Fast', desc: 'Optimized performance & smooth interactions' },
          { icon: MdLightbulbOutline, title: 'Intuitive', desc: 'User-friendly and easy-to-navigate UI/UX' },
          { icon: MdDevices, title: 'Responsive', desc: 'Seamless experience on all devices' },
          { icon: MdRocketLaunch, title: 'Dynamic', desc: 'Engaging and interactive animations' },
        ].map(({ icon: Icon, title, desc }, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-3">
              <Icon className="text-8xl bg-blue-800 p-4 rounded-full" />
              <h1 className="text-2xl">{title}</h1>
            </div>
            <p className="text-sm text-center pt-2 text-gray-600 font-light">{desc}</p>
          </div>
        ))}
      </div>

      {/* Full-Stack & Backend Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="flex flex-col items-center justify-center bg-gray-900/50 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center gap-3">
            <Code className="text-7xl text-[#7FBF89]" />
            <h1 className="text-2xl font-semibold">Full-Stack Developer</h1>
          </div>
          <p className="text-center text-gray-400 mt-3">
            I specialize in building modern web applications with efficient front-end and scalable back-end architectures.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-900/50 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center gap-3">
            <Database className="text-7xl text-[#7FBF89]" />
            <h1 className="text-2xl font-semibold">Database & API Design</h1>
          </div>
          <p className="text-center text-gray-400 mt-3">
            Proficient in designing RESTful and GraphQL APIs, managing databases like MySQL and MongoDB, and optimizing performance.
          </p>
        </div>
      </div>

      {/* Who's This Guy Section */}
      <div className="w-full xl:grid grid-cols-2 gap-8 pt-12 my-auto xl:items-center">
        <div className="flex flex-col justify-center items-center flex-1">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image src="/image.jpg" width="300" height="300" alt="Profile Image" className="object-cover object-center rounded-lg" />
          </div>
          <h3 className="pt-4 text-xl font-semibold text-gray-300">Who&apos;s this guy?</h3>
          <p className="text-sm lg:text-base pt-4 text-gray-400">I&apos;m a Full-Stack Developer from Lagos, Nigeria.</p>
          <p className="text-sm lg:text-base text-center text-gray-400">
            Passionate about building high-performance applications with seamless user experiences.
          </p>
          <p className="text-sm lg:text-base text-blue-800 mt-2 font-semibold">Let&apos;s build something great together!</p>
        </div>

        {/* Skills Section */}
        <div className="w-full my-10 lg:my-0 flex-1 relative z-10">
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default Hero
