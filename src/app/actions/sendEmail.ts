'use server'

import { Resend } from 'resend'
import {validateString, getErrorMessage} from '@/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('message')
    const senderEmail = formData.get('senderEmail')
    const senderName= formData.get('senderName')
    console.log(formData.get('senderEmail'))
 
   if (!validateString(senderEmail, 500)) {
    return {
        error: "Invalid messsage"
    }
   }
   if (!validateString(message, 5000)) {
    return {
        error: "Invalid message"
    }
   }

   try {
    await resend.emails.send({
        from: senderName + '<onboarding@resend.dev>',
        to: 'oyedelejeremiah.ng@gmail.com',
        subject: 'Message from contact form',
        reply_to: senderEmail as string,
        text: message as string
    })
   } catch (error: unknown) {

    return {
        error: getErrorMessage(error)
    }
   }

  
}