"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Socials } from "@/Skills";
import Image from "next/image";


export const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
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
          <div className="h-[65px] w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4">
            <div className="w-full max-w-6xl mx-auto h-full flex flex-row items-center justify-between m-auto">
              <a
                href="#about-me"
                className=" flex flex-row items-center"
              >
                <span className="font-bold text-gray-300">
                  Jerrified Dev
                </span>
              </a>
      
              <div className="hidden w-[500px] h-full lg:flex flex-row items-center justify-between md:mr-20">
                <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                  <a href="#about-me" className="cursor-pointer">
                    About me
                  </a>
                  <a href="#skills" className="cursor-pointer">
                    Skills
                  </a>
                  <a href="#projects" className="cursor-pointer">
                    Projects
                  </a>
                </div>
              </div>
      
              <div className="hidden lg:flex flex-row gap-5">
                {Socials.map((social) => (
                  <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={24}
                    height={24}
                  />
                ))}
              </div>
              <div
                className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl cursor-pointer overflow-hidden group"
                // onClick={toggleMenu}
                >
                <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-2 transition-all ease-out duration-300 bg-white" />
                <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-0 transition-all ease-out duration-300 bg-white translate-x-3" />
                <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-3 transition-all ease-out duration-300 bg-white translate-x-1" />
            </div>
            </div>
          </div>
        );
    }

function NavbarScroll({ isScrolling }: any) {
  console.log(isScrolling)
    return (
      <motion.nav
        key={1}
        initial="initial"
        animate={isScrolling ? "animate" : "initial"}
        exit="exit"
        variants={NavAnimations}
        className="fixed z-50 flex justify-between px-4 py-2 rounded-full ts-bg -translate-x- left-1/2 top-10"
      >
        <ul className="flex items-center">
          <li className="px-2 text-white text-md">
            <Link href={"/pods"}>About</Link>
          </li>
          <li className="px-2 text-white text-md">
            <Link href={"/"}>Projects</Link>
          </li>
          <li className="px-2 text-white text-md">
            <Link href={"/"}>Contact</Link>
          </li>
          <li className="px-4 py-2 ml-2 text-white bg-[#2c5282] rounded-full text-md ">
            <Link href={"/"}>Resume</Link>
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