import {TbBrandGithub} from 'react-icons/tb'
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function LeftSide() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-end gap-4">
       <div className="flex flex-col gap-4">
       <a href='https://github.com/Jerified' target='_blank'>
            <span className="w-10 h-10 text-xl bg-blue-600 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <TbBrandGithub className='text-white' />
            </span>
        </a>
        <a href='https://twitter.com/Jeremiah4life11' target='_blank'>
            <span className="w-10 h-10 text-xl bg-blue-600 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <BsTwitterX className='text-white' />
            </span>
        </a>
        <a href='https://www.linkedin.com/in/Jerified' target='_blank'>
            <span className="w-10 h-10 text-xl bg-blue-600 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FaLinkedinIn className='text-white' />
            </span>
        </a>
       </div>
       <div className="w-[2px] h-32 bg-white"></div>
      </div>
    )
  }