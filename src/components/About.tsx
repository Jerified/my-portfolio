'use client'

import React from 'react'
import { MdSpeed, MdLightbulbOutline, MdDevices, MdRocketLaunch } from 'react-icons/md'
import Image from 'next/image'
// @ts-ignore
import { SkillBars } from 'react-skills' 

const skills = [
  { name: 'CSS', level: 90, color: '#2c5282' },
  { name: 'HTML', level: 90, color: '#2c5282' },
  { name: 'JavaScript', level: 70, color: '#2c5282' },
  { name: 'React', level: 80, color: '#2c5282' },
  { name: 'Next.js', level: 80, color: '#2c5282' },
  { name: 'TypeScript', level: 65, color: '#2c5282' },
  { name: 'Node.js', level: 52, color: '#2c5282' },
  { name: 'Tailwindcss', level: 90, color: '#2c5282' },
]



const Hero = () => {
  return (
    <div className=' text-white max-w-4xl xl:max-w-6xl mx-auto'>
      <div className="flex flex-col items-center gap-4 justify-center">
        <h1 className='text-4xl text-[#F6E35D] tracking-widest'>ABOUT</h1>
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
      <div className='w-full h-full xl:flex gap-8 pt-8 lg:pt-24 my-auto xl:items-center lg:justify-center'>
        <div className=' flex flex-col justify-center items-center flex-1'>
          <div className="overflow-hidden w-48 h-48 clip-path-[polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)]">
            <Image src='/image.jpg' width='300' height='300' alt='' className='object-cover object-center' />
          </div>
          <h3 className='pt-4 text-gray- text-xl font-semibold'>Who&apos;s this guy?</h3>
          <p className='text-[0.75rem] lg:text-[1rem] pt-4 text-gray-600'>I&apos;m a Front-End Developer from Lagos, Nigeria.</p>
          <p className='text-[0.75rem] lg:text-[1rem] text-center text-gray-600'>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
          <p className='text-[0.75rem] lg:text-[1rem] text-blue-800'>Let&apos;s make something special</p>
        </div>
        <div className='w-full my-10 lg:my-0 flex-1'>
          {/* {skills.map((skill: any) => (
            <div className="" key={skill.name}>
              <div className='mt- mx-4 mb-3 flex'>
                <div className="bg-green-600 text-xs w-28 justify-center flex items-center">{skill.name}</div>
                <div className='bg-gray-500 dark:bg-dark-3 relative h-8 w-full'>
                  <div className={`bg-blue-800 absolute top-0 left-0 flex h-full w-[${skill.level+'%'}] items-center justify-center text-xs font-semibold text-white`}>
                    {skill.level}%
                  </div>
                </div>
              </div>
            </div>
          ))} */}
          <SkillBars  color='blue' spacing={20} skills={skills} />
          

        </div>
      </div>
    </div>
  )
}

export default Hero