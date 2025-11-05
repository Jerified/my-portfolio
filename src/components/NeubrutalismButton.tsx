"use client";

import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  label?: string;
  onClick?: () => void;
};

export default function NeubrutalismButton({ href = "#", label = "View my work", onClick }: Props) {
  const content = (
    <button
      onClick={onClick}
      className={
        "group/button rounded-lg bg-[#1e1e1e] text-black shadow-[6px_4px_0_rgba(0,0,0,0.55)]"
      }
    >
      <span
        className={
          "block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#1e1e1e] bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] px-5 py-2 text-sm md:text-base font-semibold tracking-tight text-white transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0"
        }
      >
        {label}
      </span>
    </button>
  );

  if (!href) return content;
  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}


