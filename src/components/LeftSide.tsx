import {TbBrandGithub} from 'react-icons/tb'
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function LeftSide() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-end gap-4">
       <div className="flex flex-col gap-4">
       <a href='https://github.com/Jerified' target='_blank'>
            <span className="w-10 h-10 text-xl bg-[#ff7e5f] rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ring-1 ring-white/10 shadow-[6px_4px_0_rgba(0,0,0,0.55),12px_8px_22px_rgba(0,0,0,0.32)] hover:shadow-[8px_6px_0_rgba(0,0,0,0.55),16px_12px_28px_rgba(0,0,0,0.38)]">
                <TbBrandGithub className='text-white' />
            </span>
        </a>
        <a href='https://twitter.com/Jeremiah4life11' target='_blank'>
            <span className="w-10 h-10 text-xl bg-[#ff7e5f] rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ring-1 ring-white/10 shadow-[6px_4px_0_rgba(0,0,0,0.55),12px_8px_22px_rgba(0,0,0,0.32)] hover:shadow-[8px_6px_0_rgba(0,0,0,0.55),16px_12px_28px_rgba(0,0,0,0.38)]">
                <BsTwitterX className='text-white' />
            </span>
        </a>
        <a href='https://www.linkedin.com/in/Jerrified' target='_blank'>
            <span className="w-10 h-10 text-xl bg-[#ff7e5f] rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ring-1 ring-white/10 shadow-[6px_4px_0_rgba(0,0,0,0.55),12px_8px_22px_rgba(0,0,0,0.32)] hover:shadow-[8px_6px_0_rgba(0,0,0,0.55),16px_12px_28px_rgba(0,0,0,0.38)]">
                <FaLinkedinIn className='text-white' />
            </span>
        </a>
       </div>
       <div className="w-[2px] h-32 bg-white"></div>
      </div>
    )
  }