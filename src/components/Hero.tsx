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
    <div id='#' className={`${inter.className} p-5 h-[calc(100vh-65px)]  flex flex-col items-col items-center justify-center w-full text-white font-medium leading-6 sm:leading-8 lg:leading-[3rem]`}>
        <div className="flex flex-col justify-center items-center h-full">
            <div className="flex gap-5 items-center justify-center w-full">
                <h1 className='flex whitespace-nowrap md:text-xl font-[300]'>HI IM </h1>
                <div className="h-[4px] md:h-[5px] bg-blue-800 w-full"></div>
            </div>
              <h1 className='text-4xl sm:text-6xl lg:text-7xl uppercase tracking-widest w-full font-extrabold'>Jeremiah</h1>
              <div className="flex  justify-end w-full ">    
                <p className="uppercase text-blue-800 text-sm max-w-[6rem] flex items-end justify-end">A frontend developer</p>
              </div>
              <Link href={'#about'} id='#about' className='border-2 py-[0.8rem] border-whit hover:bg-[#2c5282] hover:bg-border-none px-5 font-[300] mt-4 gap-2 flex items-center text-sm lg:text-xl cursor-pointer transition'>View my work <span><FaLongArrowAltRight className=''/></span></Link>
        </div>
      {/* <p className="text-center flex justify-center gap-3 items-center mx-auto">About <span className="text-[#7042f861]">Me</span></p> */}
    </div>
  ) 
}

export default Hero