import React from 'react';
import Image from 'next/image';
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { projects } from '@/data/projects'; 
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

const Projects = async () => {
  const src = projects.map(project => project.image);
  const blurDataURLs = await Promise.all(
    src.map(async (imagePath) => {
      const buffer = await fs.readFile(`./public${imagePath}`);
      const { base64 } = await getPlaiceholder(buffer);
      return base64;
    })
  );

  return (
    <section id="projects" className=' text-white max-w-4xl xl:max-w-6xl mx-auto pt-[8rem]'>
      <div className="flex flex-col items-center gap-4 pb-16 justify-center">
        <h1 className='text-4xl tracking-widest text-[#7FBF89]'>PROJECTS</h1>
        <div className="border-white border-2 w-16 "></div>
      </div>
      <div className="w-full flex flex-col items-center gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row gap-6 pb-8 lg:pb-16 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <a 
              href={project.link} 
              className={`w-full lg:w-1/2 h-auto relative group ${
                index % 2 === 1 ? 'lg:ml-0' : ''
              }`} 
              target='_blank'
            >
              <Image 
                className='w-full h-full object-contain'
                quality={100}
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                placeholder='blur'
                blurDataURL={blurDataURLs[index]}
              />
            </a>
            <div className={`w-full lg:w-1/2 flex flex-col gap-4 lg:justify-between ${
              index % 2 === 1 
                ? 'items-start text-left lg:-mr-16' 
                : 'items-end text-right lg:-ml-16'
            } z-10`}>
              <div>
                <h3 className="text-2xl font-bold text-[#2c5282]">{project.title}</h3>
              </div>
              <p className="bg-[#112240]/60 text-sm md:text-base p-2 md:p-6 rounded-md">
                {project.description}
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href={project.github}
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href={project.link}
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>  );
}

export default Projects;
