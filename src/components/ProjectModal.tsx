"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, MapPin, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  company?: string;
  role?: string;
  duration?: string;
  location?: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  impact?: string[];
  image: string;
  link: string;
  github?: string;
  type: 'live' | 'personal';
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#fafafa] dark:bg-[#121212] border-2 border-slate-800 dark:border-slate-300 shadow-[6px_6px_0_0_#ff7e5f] dark:shadow-[6px_6px_0_0_#ff7e5f] rounded-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Nav */}
            <div className="sticky top-0 z-20 flex justify-between items-center p-4 border-b-2 border-slate-800 dark:border-slate-700 bg-[#fafafa] dark:bg-[#121212]">
              <div className="flex space-x-2">
                <div className="w-3.5 h-3.5 rounded-full border border-slate-800 dark:border-slate-300 bg-[#ff7e5f]" />
                <div className="w-3.5 h-3.5 rounded-full border border-slate-800 dark:border-slate-300 bg-[#feb47b]" />
                <div className="w-3.5 h-3.5 rounded-full border border-slate-800 dark:border-slate-300 bg-[#d4a574]" />
              </div>
              <button
                onClick={onClose}
                className="p-1.5 border-2 border-slate-800 dark:border-slate-300 rounded-lg bg-white dark:bg-slate-800 hover:bg-[#ff7e5f] hover:text-white transition-colors shadow-[2px_2px_0_0_#1e293b] dark:shadow-[2px_2px_0_0_#cbd5e1] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none active:scale-95 text-slate-800 dark:text-slate-200"
              >
                <X className="w-5 h-5 font-bold" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-10 flex flex-col gap-8 text-slate-800 dark:text-slate-100">
              
              {/* Title & Stats */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-5 w-full">
                  <div className="inline-flex items-center border-2 border-slate-800 dark:border-slate-500 bg-[#feb47b] text-slate-900 px-3 py-1 font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0_0_#1e293b] dark:shadow-[3px_3px_0_0_#64748b] rounded-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mr-2 animate-pulse"></span>
                    {project.type === 'live' ? 'Live Project' : 'Personal Project'}
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight break-words text-slate-900 dark:text-white">
                    {project.title}
                  </h2>
                  
                  {project.company && (
                    <p className="text-xl font-bold border-l-[4px] border-[#ff7e5f] pl-4 text-slate-700 dark:text-slate-300">
                      {project.company}
                    </p>
                  )}

                  {(project.role || project.duration || project.location) && (
                    <div className="flex flex-wrap gap-4 text-sm font-semibold p-4 border-2 border-slate-800 dark:border-slate-600 bg-white dark:bg-[#1a1a1a] shadow-[4px_4px_0_0_#1e293b] dark:shadow-[4px_4px_0_0_#475569] rounded-xl flex-col sm:flex-row">
                      {project.role && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#ff7e5f]" />
                          <span>{project.role}</span>
                        </div>
                      )}
                      {project.duration && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#ff7e5f]" />
                          <span>{project.duration}</span>
                        </div>
                      )}
                      {project.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#ff7e5f]" />
                          <span>{project.location}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-base md:text-lg font-medium leading-relaxed">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-800 dark:border-slate-300 text-slate-900 bg-[#ff7e5f] font-bold shadow-[4px_4px_0_0_#1e293b] hover:shadow-[1px_1px_0_0_#1e293b] dark:shadow-[4px_4px_0_0_#cbd5e1] dark:hover:shadow-[1px_1px_0_0_#cbd5e1] hover:translate-y-[3px] hover:translate-x-[3px] transition-all rounded-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-800 dark:border-slate-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-[4px_4px_0_0_#1e293b] hover:shadow-[1px_1px_0_0_#1e293b] dark:shadow-[4px_4px_0_0_#cbd5e1] dark:hover:shadow-[1px_1px_0_0_#cbd5e1] hover:translate-y-[3px] hover:translate-x-[3px] transition-all rounded-lg"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                <div className="w-full lg:w-[420px] flex-shrink-0">
                  <div className="relative rounded-xl border-2 border-slate-800 dark:border-slate-600 overflow-hidden shadow-[6px_6px_0_0_#1e293b] dark:shadow-[6px_6px_0_0_#475569] group mt-1 bg-white">
                    <div className="aspect-video relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500 will-change-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#ff7e5f] border border-slate-800 rounded-full"></div>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-2 border-slate-800 dark:border-slate-600 text-sm font-semibold shadow-[3px_3px_0_0_#1e293b] dark:shadow-[3px_3px_0_0_#475569] hover:-translate-y-0.5 transition-transform rounded-md cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* What I Did & Impact */}
              {(project.achievements || project.impact) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                  {/* What I Did - Only for live projects */}
                  {project.achievements && project.achievements.length > 0 && (
                    <div className="border-2 border-slate-800 dark:border-slate-600 p-6 bg-white dark:bg-[#1a1a1a] shadow-[4px_4px_0_0_#1e293b] dark:shadow-[4px_4px_0_0_#475569] rounded-xl">
                      <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                        What I Did
                      </h3>
                      <ul className="space-y-4">
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3 font-medium text-[15px] md:text-base text-slate-700 dark:text-slate-300">
                            <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#feb47b] border-2 border-slate-800 text-slate-900 font-bold shadow-[2px_2px_0_0_#1e293b] rounded-full text-xs mt-0.5">
                              {index + 1}
                            </span>
                            <span className="leading-snug">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact - Only for live projects */}
                  {project.impact && project.impact.length > 0 && (
                    <div className="border-2 border-slate-800 dark:border-slate-600 p-6 bg-gradient-to-br from-[#ff7e5f]/10 to-[#feb47b]/10 dark:from-[#ff7e5f]/5 dark:to-[#feb47b]/5 shadow-[4px_4px_0_0_#1e293b] dark:shadow-[4px_4px_0_0_#475569] rounded-xl">
                      <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#ff7e5f]" />
                        Impact
                      </h3>
                      <ul className="space-y-4">
                        {project.impact.map((impact, index) => (
                          <li key={index} className="flex items-start gap-3 font-medium text-[15px] md:text-base text-slate-700 dark:text-slate-300">
                            <div className="w-2 h-2 bg-[#ff7e5f] border border-slate-800 rounded-sm mt-1.5 flex-shrink-0 shadow-[1px_1px_0_0_#1e293b]" />
                            <span className="leading-snug">{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
