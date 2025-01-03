'use client'

import React from 'react'
import { MdSpeed, MdLightbulbOutline, MdDevices, MdRocketLaunch } from 'react-icons/md'
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
  { name: 'MY-SQL', level: 75, color: '#2c5282' },
]

const Hero = () => {
  return (
    <div id="about" className='text-white max-w-4xl xl:max-w-6xl mx-auto pt-10'>
      <div className="flex flex-col items-center gap-4 justify-center">
        <h1 className='text-4xl text-[#7FBF89] tracking-widest'>ABOUT</h1>
        <div className="border-white border-2 w-16 "></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <MdSpeed className='text-8xl bg-blue-800 p-4 rounded-[100%]' />
            <h1 className='text-2xl'>Fast</h1>
          </div>
          <p className="text-sm text-center pt-2 text-gray-600 font-light">Fast load times and lag free interaction, my highest priority.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <MdLightbulbOutline className='text-8xl bg-blue-800 p-4 rounded-[100%]' />
            <h1 className='text-2xl'>Intuitive</h1>
          </div>
          <p className="text-sm text-center pt-2 text-gray-600 font-light">Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <MdDevices className='text-8xl bg-blue-800 p-4 rounded-[100%]' />
            <h1 className='text-2xl'>Responsive</h1>
          </div>
          <p className="text-sm text-center pt-2 text-gray-600 font-light">My layouts will work on any device, big or small.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <MdRocketLaunch className='text-8xl bg-blue-800 p-4 rounded-[100%]' />
            <h1 className='text-2xl'>Dynamics</h1>
          </div>
          <p className="text-sm text-center pt-2 text-gray-600 font-light">Websites don&apos;t have to be static, I love making pages come to life.</p>
        </div>

      </div>
      <div className='w-full h-full xl:grid grid-cols-2 gap-8 pt-8 lg:pt-24 my-auto xl:items-center lg:justify-center'>
        <div className=' flex flex-col justify-center items-center flex-1'>
          <div className="overflow-hidden rounded-lg clip-path-[polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)]">
            <Image src='/image.jpg' width='300' height='300' alt='' className='object-cover object-center' />
          </div>
          <h3 className='pt-4 text-gray- text-xl font-semibold'>Who&apos;s this guy?</h3>
          <p className='text-[0.75rem] lg:text-[1rem] pt-4 text-gray-600'>I&apos;m a Front-End Developer from Lagos, Nigeria.</p>
          <p className='text-[0.75rem] lg:text-[1rem] text-center text-gray-600'>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
          <p className='text-[0.75rem] lg:text-[1rem] text-blue-800'>Let&apos;s make something special</p>
        </div>
        <div className='w-full my-10 lg:my-0 flex-1 relative z-[1]'>
          {/* <SkillBars  color='blue' spacing={20} skills={skills} /> */}
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default Hero