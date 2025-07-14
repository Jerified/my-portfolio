"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Raleway } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const inter = Raleway({ 
    subsets: ["latin"],
    weight: "800"
}); 

const Hero = () => {
  const name = "Jeremiah";
  const role = "A fullstack developer";
  const [showRole, setShowRole] = useState(false);

  // Animation variants
  const nameVariants = {
    hidden: { rotateX: -90, opacity: 0, filter: "blur(10px)" },
    visible: { rotateX: 0, opacity: 1, filter: "blur(0px)" },
  };
  const roleVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: -10, opacity: 1 },
  };

  // Calculate when to show the role (after last letter animates in)
  useEffect(() => {
    const totalDelay = (name.length - 1) * 0.2 + 0.5; // last letter's delay + duration
    const timer = setTimeout(() => setShowRole(true), totalDelay * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='#' className={`${inter.className} p-5 h-[calc(100vh-65px)] flex flex-col items-center justify-center w-full text-white font-medium leading-6 sm:leading-8 lg:leading-[3rem]`}>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex gap-5 items-center justify-center w-full">
          <h1 className='flex whitespace-nowrap md:text-xl font-[300]'>HI IM </h1>
          <div className="h-[4px] md:h-[5px] bg-blue-800 w-full"></div>
        </div>
        <div className="flex justify-center w-full">
          <AnimatePresence>
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={nameVariants}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl p-0 uppercase tracking-widest font-extrabold m-0"
                style={{ transformOrigin: "50% 50%" }}
              >
                {char}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-end w-full min-h-[2.5rem]">
          <AnimatePresence>
            {showRole && (
              <div className="flex">
                {role.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={roleVariants}
                    transition={{ yoyo: Infinity, duration: 0.5, delay: i * 0.1 }}
                    className="uppercase text-blue-800 text-sm sm:text-base max-w-[6rem] flex items-end justify-end whitespace-nowrap"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            )}
          </AnimatePresence>
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