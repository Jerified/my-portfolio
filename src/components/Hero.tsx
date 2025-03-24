import Link from 'next/link'
import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import { Raleway } from "next/font/google";

const inter = Raleway({ 
    subsets: ["latin"],
    weight: "800"
}); 

const Hero = () => {
  return (
    <div id='#' className={`${inter.className} p-5 h-[calc(100vh-65px)] flex flex-col items-center justify-center w-full text-white font-medium leading-6 sm:leading-8 lg:leading-[3rem]`}>
        <div className="flex flex-col justify-center items-center h-full">
            <div className="flex gap-5 items-center justify-center w-full">
                <h1 className='flex whitespace-nowrap md:text-xl font-[300]'>HI IM </h1>
                <div className="h-[4px] md:h-[5px] bg-blue-800 w-full"></div>
            </div>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl p-0 uppercase tracking-widest w-full font-extrabold m-0'>Jeremiah</h1>
            <div className="flex justify-end w-full">    
                <p className="uppercase text-blue-800 text-sm max-w-[6rem] flex items-end justify-end whitespace-nowrap">A fullstack developer</p>
            </div>
            <Link href={'#about'} id='#about' className="group relative overflow-hidden rounded-full border-2 border-white px-5 py-[0.8rem] font-[300] mt-4 gap-2 flex items-center text-sm lg:text-xl cursor-pointer transition-all">
                <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-[#7FBF89] transition-all duration-500 ease-out group-hover:translate-y-14"></span>
                <span className="font-semibold text-white z-10">View my work</span>
                <span className="z-10"><FaLongArrowAltRight /></span>
            </Link>
        </div>
    </div>
  ) 
}

export default Hero