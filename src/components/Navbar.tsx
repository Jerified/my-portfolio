/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Socials } from "@/Skills";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { Alex_Brush } from "next/font/google";
import AnimatedBackgroundTabs from "./AnimatedBackgroundTabs";

const alexBrush = Alex_Brush({ 
    subsets: ["latin"],
    weight: "400"
    });

const ButtonHoverDown = () => {
  return (
    <>
      <button className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#d4a574] to-[#c49b6a] border-2 border-[#b8860b] px-6 font-medium text-black transition-all duration-100 [box-shadow:5px_5px_#b8860b] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_#b8860b]'>
        <Link href="https://docs.google.com/document/d/130tyY-dbYOi8gxirFpIrufPzmBWdSVHpnUP-qsyjsRI/edit?usp=sharing" target='_blank'>
          Resume
        </Link>
      </button>
    </>
  );
};

export const Navbar = () => {
  return (
    <>
      <NavbarScroll />
    </>
  );
}

function NavbarScroll() {
  const tabs = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const [activeId, setActiveId] = React.useState<string>(tabs[0].id);

  // Title-based scroll tracker: pick the title closest to a target line (30% from top)
  React.useEffect(() => {
    let ticking = false;

    const getTitleEl = (sectionId: string): HTMLElement | null => {
      const byData = document.querySelector<HTMLElement>(`#${sectionId} [data-section-title]`);
      if (byData) return byData;
      const byH1 = document.querySelector<HTMLElement>(`#${sectionId} h1, #${sectionId} h2`);
      if (byH1) return byH1;
      return document.getElementById(sectionId);
    };

    const updateActiveFromScroll = () => {
      const targetY = Math.round(window.innerHeight * 0.4); // Moved to 40% for later switching
      let bestId = activeId;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const t of tabs) {
        const el = getTitleEl(t.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const titleCenter = rect.top + rect.height / 2;
        const distance = Math.abs(titleCenter - targetY);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = t.id;
        }
      }

      // Only switch if the new section is significantly closer (hysteresis)
      if (bestId !== activeId && bestDistance < 150) {
        setActiveId(bestId);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveFromScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial run and listeners
    setTimeout(updateActiveFromScroll, 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll as any);
      window.removeEventListener('resize', onScroll as any);
      window.removeEventListener('load', onScroll as any);
    };
  }, [tabs.map(t => t.id).join(','), activeId]);

  const handleNav = (targetId: string) => {
    setActiveId(targetId); // reflect immediately
    const ev = new CustomEvent("nav-transition", { detail: targetId });
    window.dispatchEvent(ev);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        key={1}
        initial="initial"
        animate="animate"
        variants={NavAnimations}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
      >
        <div className="inline-flex items-center justify-between px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20 min-w-[800px]">
          {/* Logo */}
          <a href="/" className="flex flex-row items-center">
            <span className={`${alexBrush.className} text-2xl font-bold text-gray-300 hover:text-white transition-colors duration-200`}>
              Jerrified<span className='text-[#d4a574]'>Dev</span>
          </span>
        </a>

          {/* Navigation Links with animated background */}
          <div className="flex items-center">
            <AnimatedBackgroundTabs
              tabs={tabs.map(t => ({ id: t.id, label: t.label, onClick: () => handleNav(t.id) }))}
              defaultId={tabs[0].id}
              activeId={activeId}
              onActiveChange={setActiveId}
              className="bg-white/5 border-white/10"
            />
          </div>

          {/* Resume Button */}
          <div className="flex items-center">
            <ButtonHoverDown />
          </div>
        </div>
      </motion.nav>

      {/* Mobile & Tablet Navbar */}
      <div className="lg:hidden">
            <MobileNav />
        </div>
    </>
  );
}

const NavAnimations = {
  initial: {
    y: 0,
    x: "-50%",
    opacity: 1,
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
};
