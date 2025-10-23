"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TransitionOverlay() {
  const [activeTarget, setActiveTarget] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<string>;
      setActiveTarget(ce.detail || null);
    };
    window.addEventListener("nav-transition", handler as EventListener);
    return () => window.removeEventListener("nav-transition", handler as EventListener);
  }, []);

  React.useEffect(() => {
    if (!activeTarget) return;
    const scrollTimer = setTimeout(() => {
      const elem = document.getElementById(activeTarget);
      elem?.scrollIntoView({ behavior: "smooth" });
    }, 220);
    const dismissTimer = setTimeout(() => setActiveTarget(null), 560);
    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(dismissTimer);
    };
  }, [activeTarget]);

  return (
    <AnimatePresence>
      {activeTarget && (
        <motion.div
          key={activeTarget}
          className="fixed inset-0 z-40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 h-full bg-[#0f0f10]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 32, duration: 0.55 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_60%_30%,#ffc49433_0%,transparent_60%),radial-gradient(700px_500px_at_30%_70%,#feb47b2e_0%,transparent_55%),radial-gradient(600px_400px_at_70%_70%,#ff7e5f26_0%,transparent_60%)]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
