'use server'
export const sendEmail = async (formData: FormData) => {
   
    console.log(formData.get('senderEmail'))
}