import React from 'react'
import Image from 'next/image'


const Projects = () => {
    return (
        <section className=' text-white max-w-6xl mx-auto pt-[8rem]'>
            <div className="flex flex-col items-center gap-4 pb-16 justify-center">
                <h1 className='text-4xl tracking-widest'>PROJECTS</h1>
                <div className="border-white border-2 w-16 "></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="">
                    <Image className='w-full h-full' quality={100} src='/petStore.png' alt='pet-store' width={500} height={500} />
                    <div className="">
                        <h1 className="">Pet Store</h1>
                    </div>
                </div>
                <div className="">
                <Image className='w-full h-full' quality={100} src='/myTeam.png' alt='my-Team' width={500} height={500} />
            </div>
            </div>
        </section>
    )
}

export default Projects