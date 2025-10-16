/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Socials } from "@/Skills";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { Alex_Brush } from "next/font/google";

const inter = Alex_Brush({ 
    subsets: ["latin"],
    weight: "400"
    });

export const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll isScrolling={isScrolling} />
        ) : (
          // <NavbarScroll isScrolling={isScrolling} />
          <NavbarFixed />
        )}
      </AnimatePresence>
    </>
  );
}
function NavbarFixed() {
  return (
    <div className="h-[65px] lg:h-[78px] w-full fixed top-0 shadow-lg shado-[#2A0E61]/50 bg-[#03001417 backdrop-blur-m z-50 px-4 py-8">
      <div className="w-full max-w-6xl mx-auto h-full flex flex-row items-center justify-center lg:justify-between m-auto">
        <a
          href="/"
          className=" flex flex-row items-center "
        >
          {/* <img src='/logo.jpeg' alt='logo' className='w-20'  /> */}
          <span className={`${inter.className} text-3xl font-bold text-md text-gray-300`}>
            Jerrified<span className='text-[#2c5282]'>Dev</span>
          </span>
        </a>

        <div className="hidden h-full lg:flex flex-row items-center justify-between">
          <div className="flex items-center  gap-8 w-full h-auto text-gray-200 uppercase">
            <a href="#about" className="cursor-pointer">
              About
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
            <li className="px-4 py-2 text-white bg-[#2c5282]/70 hover:bg-[#2c5282]/100 transition ease-in rounded-sm ">
              <Link href="https://docs.google.com/document/d/130tyY-dbYOi8gxirFpIrufPzmBWdSVHpnUP-qsyjsRI/edit?usp=sharing"  role="button" target='_blank'>Resume</Link>
            </li>
          </div>
        </div>
        <div
          className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl cursor-pointer overflow-hidden group"
        >
          {/* <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-2 transition-all ease-out duration-300 bg-white" />
          <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-0 transition-all ease-out duration-300 bg-white translate-x-3" />
          <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-3 transition-all ease-out duration-300 bg-white translate-x-1" /> */}
            <MobileNav />
        </div>
      </div>

    </div>
  );
}

function NavbarScroll({ isScrolling }: any) {

  const ref = useRef<string | any>('')
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth"
    })

    const links = document.querySelectorAll(".nav-link")
    links.forEach((link) => {
      link.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  }
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-50 flex justify-between px-4 py-2 rounded-full ts-bg -translate-x- left-1/2 top-7"
    >
      <ul className="flex items-center text-xs sm:text-sm">
        <Link href='#about' onClick={scrollTo} className="nav-link px-2 text-white">About</Link>
        <Link href="#projects" className="nav-link px-2 text-white" onClick={scrollTo}>Projects</Link>
        <Link href="#contact" className="nav-link px-2 text-white" onClick={scrollTo}>Contact</Link>
        <li className="px-4 py-2 ml-2 text-white bg-[#2c5282] rounded-full text-md ">
          <Link href="https://docs.google.com/document/d/130tyY-dbYOi8gxirFpIrufPzmBWdSVHpnUP-qsyjsRI/edit?usp=sharing"  role="button" >Resume</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};
