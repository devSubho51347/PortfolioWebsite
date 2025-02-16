import React from 'react';
import { motion } from 'framer-motion';

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, children, className = '' }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        {children}
      </div>
    </motion.section>
  );
};

export default ProjectSection;