"use client";

import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export default function HeaderStyleButton({ href, label }: Props) {
  return (
    <Link href={href} className="inline-block">
      <button className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#d4a574] to-[#c49b6a] border-2 border-[#b8860b] px-6 font-medium text-black transition-all duration-100 [box-shadow:5px_5px_#b8860b] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_#b8860b]'>
        {label}
      </button>
    </Link>
  );
}


