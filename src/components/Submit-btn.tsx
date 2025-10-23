'use client'

import React from 'react'
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

const SubmitBtn = () => {
    const { pending } = useFormStatus()

  return (
    <button className='group flex  items-center justify-center mt-2 gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 bg-[#ff7e5f] hover:bg-[#ff7e5f]/80 disabled:scale-100 disabled:bg-opacity-70' type="submit" disabled={pending}>
         {
        pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white '></div> : (
            <>
                    Submit
            <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
            </>
    )
        }
   
     </button>
  ) 
}

export default SubmitBtn