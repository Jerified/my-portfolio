"use client";

import React from "react";
import { motion } from "framer-motion";

interface TabsProps {
  tabs: { id: string; label: string; href?: string; onClick?: () => void }[];
  defaultId?: string;
  className?: string;
  activeId?: string;
  onActiveChange?: (id: string) => void;
}

export default function AnimatedBackgroundTabs({ tabs, defaultId, className = "", activeId, onActiveChange }: TabsProps) {
  const isControlled = typeof activeId === "string";
  const [uncontrolledId, setUncontrolledId] = React.useState(defaultId ?? tabs[0]?.id);
  const active = isControlled ? activeId! : uncontrolledId;

  const [hoverId, setHoverId] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const buttonRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = React.useState<{ x: number; width: number }>({ x: 0, width: 0 });

  const currentId = hoverId ?? active;

  const updateIndicator = React.useCallback(() => {
    if (!currentId || !containerRef.current) return;
    const btn = buttonRefs.current[currentId];
    if (!btn) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const rect = btn.getBoundingClientRect();
    const x = rect.left - containerRect.left + containerRef.current.scrollLeft;
    const width = rect.width;
    setIndicator({ x, width });
  }, [currentId]);

  React.useEffect(() => {
    updateIndicator();
  }, [currentId, tabs.length, updateIndicator]);

  React.useEffect(() => {
    const handleResize = () => updateIndicator();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateIndicator]);

  const setActive = (id: string) => {
    if (isControlled) onActiveChange?.(id);
    else setUncontrolledId(id);
  };

  return (
    <div ref={containerRef} className={`relative inline-flex items-center rounded-lg bg-white/5 p-1 border border-white/10 ${className}`}>
      {/* Background indicator */}
      <motion.div
        aria-hidden
        className="absolute top-1 bottom-1 rounded-md bg-white/10 will-change-transform"
        initial={false}
        animate={{ x: indicator.x, width: indicator.width, opacity: indicator.width > 0 ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 40, mass: 0.5, duration: 0.45 }}
      />

      {tabs.map((t) => (
        <button
          key={t.id}
          ref={(el) => (buttonRefs.current[t.id] = el)}
          type="button"
          onMouseEnter={() => setHoverId(t.id)}
          onMouseLeave={() => setHoverId(null)}
          onFocus={() => setHoverId(t.id)}
          onBlur={() => setHoverId(null)}
          onClick={() => {
            setActive(t.id);
            t.onClick?.();
          }}
          className={`relative z-10 px-4 py-1.5 text-sm transition-colors duration-200 ${
            currentId === t.id ? "text-white" : "text-gray-300 hover:text-white"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
