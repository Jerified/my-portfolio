"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { projects } from '@/data/projects'; 
import InView from './InView';
import { PixelImage } from './PixelImage';
import { ComicText } from './ComicText';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'personal'>('live');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const liveProjects = projects.filter(project => project.type === 'live');
  const personalProjects = projects.filter(project => project.type === 'personal');
  const currentProjects = activeTab === 'live' ? liveProjects : personalProjects;

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className='text-white dark:text-white light:text-gray-900 max-w-4xl xl:max-w-6xl mx-auto pt-[8rem] scroll-mt-28'>
      <div className="flex flex-col items-center gap-4 pb-16 justify-center">
        <h1 className='text-4xl tracking-widest text-[#d4a574] dark:text-[#d4a574] light:text-[#b8860b]' data-section-title>PROJECTS</h1>
        <div className="border-white dark:border-white light:border-gray-900 border-2 w-16"></div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'live'
                ? 'bg-gradient-to-r from-[#d4a574] to-[#c49b6a] text-black'
                : 'text-white'
            }`}
          >
            Live Projects
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'personal'
                ? 'bg-gradient-to-r from-[#d4a574] to-[#c49b6a] text-black'
                : 'text-white'
            }`}
          >
            Personal Projects
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-8">
        {currentProjects.map((project, index) => (
          <InView key={project.id}>
            <div 
              className={`flex flex-col lg:flex-row gap-6 pb-8 lg:pb-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div 
                className={`w-full lg:w-1/2 h-auto relative group cursor-pointer ${
                  index % 2 === 1 ? 'lg:ml-0' : ''
                }`}
                onClick={() => openModal(project)}
              >
                <PixelImage 
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  grid="8x8"
                  grayscaleAnimation={true}
                  pixelFadeInDuration={600}
                  maxAnimationDelay={800}
                  colorRevealDelay={1000}
                  className="w-full h-full object-contain"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                {/* Click indicator */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <RxOpenInNewWindow className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className={`w-full lg:w-1/2 flex flex-col gap-4 lg:justify-between ${
                index % 2 === 1 
                  ? 'items-start text-left lg:-mr-16' 
                  : 'items-end text-right lg:-ml-16'
              } z-10`}>
                <div>
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-[#ff7e5f]">{project.title}</h3>
                  </div>
                </div>
                <div className="w-full">
                  <div className="rounded-xl p-3 md:p-6 bg-gradient-to-br from-[#ff7e5f]/20 to-[#feb47b]/20 backdrop-blur-sm border border-[#ff7e5f]/30 ring-1 ring-white/10 text-left shadow-[6px_4px_0_rgba(0,0,0,0.55),12px_8px_22px_rgba(0,0,0,0.35)]">
                    <p className="text-sm md:text-base">{project.description}</p>
                  </div>
                </div>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <div className="text-2xl flex gap-4">
                  {project.github && (
                    <a
                      className="hover:text-textGreen duration-300"
                      href={project.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TbBrandGithub />
                    </a>
                  )}
                  <a
                    className="hover:text-textGreen duration-300"
                    href={project.link}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          </InView>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;
