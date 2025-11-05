"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Anton } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { MorphingText } from '@/components/ui/morphing-text';
import { ComicText } from './ComicText';
import HeaderStyleButton from './HeaderStyleButton';

const anton = Anton({ 
    subsets: ["latin"],
    weight: "400"
}); 

const Hero = () => {
  const name = "Jeremiah";
  const roles = [
    "A Frontend Developer",
    "A Backend Developer", 
    "A Full Stack Developer",
    "A React Developer",
    "A Node.js Developer",
    "A Web Developer"
  ];
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

  useEffect(() => {
    const totalDelay = (name.length - 1) * 0.2 + 0.5; 
    const timer = setTimeout(() => setShowRole(true), totalDelay * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
        <div id='#' className={`${anton.className} p-5 h-screen flex flex-col items-center justify-center w-full text-white dark:text-white light:text-gray-900`}>
      <div className="flex flex-col justify-center items-center h-full w-full max-w-6xl mx-auto px-4 pt-6">
        <div className="flex justify-center w-full mb-2">
          <ComicText>{name}</ComicText>
        </div>
        <div className="flex justify-center w-full min-h-[3rem] md:min-h-[4rem]">
          <MorphingText 
            texts={roles}
            className="uppercase text-[#d4a574] dark:text-[#d4a574] light:text-[#b8860b] text-base sm:text-xl md:text-2xl lg:text-3xl flex items-center justify-center whitespace-nowrap font-normal"
          />
        </div>
        <div className="mt-6">
          <HeaderStyleButton href="#about" label="View my work" />
        </div>
      </div>
    </div>
  ) 
}

export default Hero