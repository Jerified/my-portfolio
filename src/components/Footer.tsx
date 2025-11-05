'use client'

import {useRef } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {TbBrandGithub} from 'react-icons/tb'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {

    const sectionRef = useRef<any>()
    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

  
  return (
    <div className='max-w-6xl mx-auto pt-20 pb-10 !px-0'>
      <div className="border-b border border-[#ff7e5f] w-full relative mb-12">
        <Link href='#' onClick={scrollToSection} className='nav-link' scroll={true}>
          <MdKeyboardDoubleArrowUp id='#' className='bg-[#ff7e5f] bottom-[50] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white absolute cursor-pointer' />
        </Link>
      </div>
      <div className="flex justify-center pt-10 gap-7">
            <Link 
              href={'https://github.com/Jerified'} 
              target='_blank' 
              className='group relative bg-gray-800/20 rounded-md p-3 transition-all duration-300 hover:bg-gray-800/40 hover:scale-110 hover:-translate-y-1 ring-1 ring-white/10 shadow-[6px_4px_0_rgba(0,0,0,0.55),12px_8px_22px_rgba(0,0,0,0.32)]'
            >
                <TbBrandGithub className='text-white text-lg lg:text-2xl transition-all duration-300 group-hover:text-gray-300 group-hover:scale-110' />
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-gray-800/10 to-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href={'https://twitter.com/Jeremiah4life11'} 
              target='_blank' 
              className='group relative bg-black/20 rounded-md p-3 transition-all duration-300 hover:bg-black/40 hover:scale-110 hover:-translate-y-1 ring-1 ring-white/10 shadow-[6px_4px_0_rgba(0,0,0,0.55),12px_8px_22px_rgba(0,0,0,0.32)]'
            >
                <BsTwitterX className='text-white text-lg lg:text-2xl transition-all duration-300 group-hover:text-gray-300 group-hover:scale-110' />
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-black/10 to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href={'https://www.linkedin.com/in/Jerrified'} 
              target='_blank' 
              className='group relative bg-blue-600/20 rounded-md p-3 transition-all duration-300 hover:bg-blue-600/40 hover:scale-110 hover:-translate-y-1 ring-1 ring-white/10 shadow-[6px_4px_0_rgba(0,0,0,0.55),12px_8px_22px_rgba(0,0,0,0.32)]'
            >
                <FaLinkedinIn className='text-white text-lg lg:text-2xl transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110' />
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-600/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            {/* <Link href={'https://github.com/Jerified'} className='bg-[#2c5282] p-3'>
                <TbBrandGithub className='text-white text-3xl' />
            </Link> */}
        </div>
        <p className="pt-10 text-gray-500 flex justify-center">OYEDELE JEREMIAH <span className="text-[#feb47b] indent-2">&copy; 2025</span></p>
    </div>
  ) 
}

export default Footer