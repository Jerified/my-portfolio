import React from 'react'
import Image from 'next/image'
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";


const Projects = () => {
  return (
    <section className=' text-white max-w-4xl xl:max-w-6xl mx-auto pt-[8rem]'>
      <div className="flex flex-col items-center gap-4 pb-16 justify-center">
        <h1 className='text-4xl tracking-widest text-[#7FBF89]'>PROJECTS</h1>
        <div className="border-white border-2 w-16 "></div>
      </div>
      <div className="w-full flex flex-col items-center gap-8">
        <div className="flex flex-col lg:flex-row gap-6 pb-8 lg:pb-16">
          <a href="https://pet-store1.vercel.app/" className="w-full lg:w-1/2 h-auto relative group" target='_blank' >
            <Image className='w-full h-full object-contain' quality={100} src='/petStore.png' alt='pet-store' width={500} height={500} />
          </a>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <h3 className="text-2xl font-bold text-[#2c5282]">Pet Store</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A web app that provides a one-stop solution for pet owners and lovers. Users can also find information about pet care, health, and training.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Framer-motion</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Jerified/Pet-Store"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://pet-store1.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row-reverse pb-8 gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://myteamapp-jerified.vercel.app/"
            target="_blank"
          >
            <div>
              <Image className='w-full h-full object-contain' quality={100} src='/myTeam.png' alt='my-Team' width={500} height={500} />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-4 justify-between items-end text-right z-10">
            <div>
              <h3 className="text-2xl font-bold text-[#2c5282]">My Team</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A web app that helps companies build dynamics teams made up of global talent.
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between">
              <li>Nextjs</li> 
              <li>Typescript</li>
              <li>Tailwind css</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className=" duration-300"
                href="https://github.com/Jerified/myteam"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://myteamapp-jerified.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 pb-8 lg:pb-16">
          <a href="https://pet-store1.vercel.app/" className="w-full lg:w-1/2 h-auto relative group" target='_blank' >
            <Image className='w-full h-full object-contain' quality={100} src='/footbalUpdate.png' alt='pet-store' width={500} height={500} />
          </a>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:justify-center items-end text-right lg:-ml-16 z-10">
            <div>
              <h3 className="text-2xl font-bold text-[#2c5282]">Match Update</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              An web appp that provides live and latest football scores, fitures, results, and news from various league around the world.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Framer-motion</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Jerified/Pet-Store"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://pet-store1.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://weather-app-jerified.vercel.app/"
            target="_blank"
          >
            <div>
              <Image className='w-full h-full object-contain' quality={100} src='/weatherApp.png' alt='my-Team' width={500} height={500} />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-4 justify-between items-end text-right z-10">
            <div>
              <h3 className="text-2xl font-bold text-[#2c5282]">Weather Forecast</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A web app that provides accurate and reliable weather information for any location. Users can search for any city and see the current and future weather condition.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Tailwind css</li>
              <li>React Hook Form</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className=" duration-300"
                href="https://github.com/Jerified/Weather-app"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://weather-app-jerified.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects