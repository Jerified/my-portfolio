import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'

const Hero = () => {
  return (
    <div id='#' className='p-5 h-[calc(100vh-65px)]  flex flex-col items-col items-center justify-center w-full text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-6 sm:leading-8 lg:leading-[3rem]'>
      <h1 className=''>Hello, I&apos;m <span className='text-blue-800'>Oyedele Jeremiah.</span></h1>
      <p className="">I&apos;m a front-end developer.</p>
      <button className='border-2 py-[0.8rem] border-whit hover:bg-[#2c5282] px-5 font-[300] mt-4 gap-2 flex items-center text-sm lg:text-xl cursor-pointer transition'>View my work <span><FaLongArrowAltRight className=''/></span></button>
      {/* <p className="text-center flex justify-center gap-3 items-center mx-auto">About <span className="text-[#7042f861]">Me</span></p> */}

    </div>
  ) 
}

export default Hero