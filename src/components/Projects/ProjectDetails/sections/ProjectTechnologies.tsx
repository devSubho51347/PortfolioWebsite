import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../projectsData';

interface ProjectTechnologiesProps {
  project: Project;
}

const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({ project }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTechnologies;