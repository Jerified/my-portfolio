'use client'
import { sendEmail } from '@/app/actions/sendEmail'
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Contact = () => {

   
    return (
        <div className=' text-white max-w-6xl mx-auto pt-20 w-[min(100%,38rem)]'>
            <div className="flex flex-col items-center gap-3 justify-center">
                <h1 className='text-4xl text-[#F6E35D] tracking-widest'>CONTACT</h1>
                <div className="bg-white h-[0.2rem] w-24 "></div>
            </div>
            <p className="flex text-blue-800 items-center pt-10 justify-center">Have a question or want to work together?</p>
            <form action={async (formData) => {
                console.log(formData.get('senderEmail'))
                await sendEmail(formData)
            }} className="mt-10 flex flex-col gap-1 text-black">
                <input className='h-10 p-3 rounded-sm  placeholder:text-[0.8rem]' placeholder='Name' type="text" name="senderName" maxLength={500} id="" />
                <input className='h-10 p-3 rounded-sm placeholder:text-[0.8rem]' name='senderEmail' required placeholder='Enter email' type="email" id="" />
                <textarea className='h-[11rem] p-3 rounded-sm placeholder:text-[0.8rem]' required placeholder='Your Message' name="message" maxLength={5000} id=""></textarea>
                <div className="flex justify-end">
                    <button className='group flex  items-center justify-center mt-2 gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 bg-[#2c5282] hover:bg-[#2c5282]/70' type="submit">Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:transition-x-1 group-hover:-transition-y-1' /> </button>
                </div>
            </form>
        </div>
    )
}

export default Contact