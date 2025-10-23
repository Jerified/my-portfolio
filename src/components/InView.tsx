"use client";

import React from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface InViewProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  variants?: Variants;
  transition?: any;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function InView({
  children,
  className,
  once = true,
  variants = defaultVariants,
  transition = { duration: 0.6, ease: "easeOut" },
}: InViewProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: once, rootMargin: "-10% 0px" });

  React.useEffect(() => {
    if (inView) controls.start("visible");
    else if (!once) controls.start("hidden");
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}


