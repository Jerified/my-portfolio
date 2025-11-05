"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

type AnimatedCTAProps = {
  href: string;
  label?: string;
};

export default function AnimatedCTA({ href, label = "View my work" }: AnimatedCTAProps) {
  const [isActivated, setIsActivated] = useState(false);
  const iconControls = useAnimation();

  const handleClick = async () => {
    setIsActivated((v) => !v);
    await iconControls.start({
      scale: [1, 1.15, 1],
      rotate: [0, 8, -8, 0],
      transition: { duration: 0.5 },
    });
  };

  return (
    <Link href={href} className="inline-block">
      <motion.button
        className="relative overflow-hidden rounded-full border border-[#ff7e5f]/40 bg-[#ff7e5f] px-5 py-3 text-sm md:text-base font-semibold text-white shadow-[6px_4px_0_rgba(0,0,0,0.55),12px_8px_22px_rgba(0,0,0,0.32)]"
        whileTap={{ scale: 0.96 }}
        onClick={handleClick}
      >
        {/* sweep fill */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#feb47b] to-[#ff7e5f]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActivated ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: "left" }}
        />

        {/* content */}
        <motion.span className="relative z-10 inline-flex items-center gap-2">
          <span>{label}</span>
          <motion.span animate={iconControls}>
            <FaLongArrowAltRight />
          </motion.span>
        </motion.span>

        {/* subtle sparkles */}
        {isActivated && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {[...Array(14)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white/70"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                animate={{ y: [0, -14, 0], opacity: [0, 1, 0] }}
                transition={{ duration: Math.random() * 1.6 + 0.8, repeat: Infinity, delay: Math.random() * 1.2 }}
              />
            ))}
          </motion.div>
        )}
      </motion.button>
    </Link>
  );
}


