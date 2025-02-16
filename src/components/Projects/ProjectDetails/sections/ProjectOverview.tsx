import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../projectsData';

interface ProjectOverviewProps {
  project: Project;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Problem Statement */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem Statement</h2>
            <p className="text-gray-600 leading-relaxed">{project.problemStatement}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
            <p className="text-gray-600 leading-relaxed">{project.solution}</p>
          </div>
        </motion.div>

        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              View Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition-colors"
            >
              View Source Code
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOverview;