'use client'
import { sendEmail } from '@/app/actions/sendEmail'
// import SubmitBtn from '.Submit-btn'
import React from 'react'
import { useFormStatus } from 'react-dom' 
import SubmitBtn from './Submit-btn'
import toast from 'react-hot-toast'

const Contact = () => {
    

   
    return (
        <div id="contact" className=' text-white max-w-6xl mx-auto pt-20 w-[min(100%,38rem)]'>
            <div className="flex flex-col items-center gap-3 justify-center">
                <h1 className='text-4xl text-[#7FBF89] tracking-widest'>CONTACT</h1>
                <div className="bg-white h-[0.2rem] w-24 "></div>
            </div>
            <p className="flex text-blue-800 items-center pt-10 justify-center">Have a question or want to work together?</p>
            <form action={async (formData) => {
                console.log(formData.get('senderEmail'))
                const { data, error } = await sendEmail(formData)
                if (error) {
                    toast.error(error)
                    return
                }
                toast.success("Email sent successfully!")
            }} className="mt-10 flex flex-col gap-1 text-white">
                <input className='h-10 p-3 rounded-sm  placeholder:text-[0.8rem] outline-none border-2 border-[#2c5282] bg-inherit' placeholder='Name' type="text" name="senderName" maxLength={500} id="" />
                <input className='h-10 p-3 rounded-sm placeholder:text-[0.8rem]  outline-none border-2 border-[#2c5282] bg-inherit' name='senderEmail' required placeholder='Enter email' type="email" id="" />
                <textarea className='h-[11rem] p-3 rounded-sm placeholder:text-[0.8rem]  outline-none border-2 border-[#2c5282] bg-inherit' required placeholder='Your Message' name="message" maxLength={5000} id=""></textarea>
                <div className="flex justify-end">
                   <SubmitBtn />
                </div>
            </form>
        </div>
    )
}

export default Contact