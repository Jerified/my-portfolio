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
      <div className="border-b border border-[#2c5282] w-full relative mb-12">
        <Link href='#' onClick={scrollToSection} className='nav-link' scroll={true}>
          <MdKeyboardDoubleArrowUp id='#' className='bg-[#7FBF89] bottom-[50] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white absolute cursor-pointer' />
        </Link>
      </div>
      <div className="flex justify-center pt-10 gap-7">
            <Link href={'https://github.com/Jerified'} target='_blank' className='bg-[#2c5282]/30 rounded-md p-3'>
                <TbBrandGithub className='text-white text-lg lg:text-2xl' />
            </Link>
            <Link href={'https://twitter.com/Jeremiah4life11'} target='_blank' className='bg-[#2c5282]/30 rounded-md p-3'>
                <BsTwitterX className='text-white text-lg lg:text-2xl' />
            </Link>
            <Link href={'https://www.linkedin.com/in/Jerrified'} target='_blank' className='bg-[#2c5282]/30 rounded-md p-3'>
                <FaLinkedinIn className='text-white text-lg lg:text-2xl' />
            </Link>
            {/* <Link href={'https://github.com/Jerified'} className='bg-[#2c5282] p-3'>
                <TbBrandGithub className='text-white text-3xl' />
            </Link> */}
        </div>
        <p className="pt-10 text-gray-500 flex justify-center">OYEDELE JEREMIAH <span className="text-[#7FBF89] indent-2">&copy; 2025</span></p>
    </div>
  ) 
}

export default Footer