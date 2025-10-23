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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Header */}
            <div className="relative p-8 pb-4">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Project Image */}
                <div className="flex-shrink-0">
                  <div className="w-full lg:w-80 h-48 lg:h-64 relative rounded-xl overflow-hidden bg-gradient-to-br from-[#feb47b]/20 to-[#d4a574]/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                    {project.company && (
                      <p className="text-xl text-[#d4a574] font-semibold">{project.company}</p>
                    )}
                  </div>

                  {(project.role || project.duration || project.location) && (
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      {project.role && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#feb47b]" />
                          <span>{project.role}</span>
                        </div>
                      )}
                      {project.duration && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#feb47b]" />
                          <span>{project.duration}</span>
                        </div>
                      )}
                      {project.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#feb47b]" />
                          <span>{project.location}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-gray-300 leading-relaxed">{project.description}</p>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d4a574] to-[#c49b6a] text-black rounded-lg font-semibold hover:from-[#c49b6a] hover:to-[#d4a574] transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 pb-8 space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* What I Did - Only for live projects */}
              {project.achievements && project.achievements.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">What I Did</h3>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#feb47b] rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Impact - Only for live projects */}
              {project.impact && project.impact.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#feb47b]" />
                    Impact
                  </h3>
                  <ul className="space-y-2">
                    {project.impact.map((impact, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#d4a574] rounded-full mt-2 flex-shrink-0" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
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
