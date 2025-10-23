'use client'
import { sendEmail } from '@/app/actions/sendEmail'
// import SubmitBtn from '.Submit-btn'
import React from 'react'
import { useFormStatus } from 'react-dom' 
import SubmitBtn from './Submit-btn'
import toast from 'react-hot-toast'
import InView from './InView'

const Contact = () => {
    

   
    return (
            <div id="contact" className=' text-white dark:text-white light:text-gray-900 max-w-6xl mx-auto pt-20 w-[min(100%,38rem)] scroll-mt-28'>
            <InView>
            <div className="flex flex-col items-center gap-3 justify-center">
                <h1 className='text-4xl text-[#d4a574] dark:text-[#d4a574] light:text-[#b8860b] tracking-widest' data-section-title>CONTACT</h1>
                <div className="bg-white dark:bg-white light:bg-gray-900 h-[0.2rem] w-24 "></div>
            </div>
            <p className="flex text-[#d4a574] dark:text-[#d4a574] light:text-[#b8860b] items-center pt-10 justify-center">Have a question or want to work together?</p>
            <form action={async (formData) => {
                console.log(formData.get('senderEmail'))
                const { data, error } = await sendEmail(formData)
                if (error) {
                    toast.error(error)
                    return
                }
                toast.success("Email sent successfully!")
                }} className="mt-10 flex flex-col gap-1 text-white dark:text-white light:text-gray-900">
                    <input className='h-10 p-3 rounded-sm placeholder:text-[0.8rem] outline-none border-2 border-[#d4a574] dark:border-[#d4a574] light:border-[#b8860b] bg-inherit dark:bg-inherit light:bg-white' required placeholder='Name' type="text" name="senderName" maxLength={500} id="" />
                    <input className='h-10 p-3 rounded-sm placeholder:text-[0.8rem] outline-none border-2 border-[#d4a574] dark:border-[#d4a574] light:border-[#b8860b] bg-inherit dark:bg-inherit light:bg-white' name='senderEmail' required placeholder='Enter email' type="email" id="" />
                    <textarea className='h-[11rem] p-3 rounded-sm placeholder:text-[0.8rem] outline-none border-2 border-[#d4a574] dark:border-[#d4a574] light:border-[#b8860b] bg-inherit dark:bg-inherit light:bg-white' required placeholder='Your Message' name="message" maxLength={5000} id=""></textarea>
                <div className="flex justify-end">
                   <SubmitBtn />
                </div>
            </form>
            </InView>
        </div>
    )
}

export default Contact