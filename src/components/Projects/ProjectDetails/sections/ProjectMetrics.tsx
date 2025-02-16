import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../projectsData';

interface ProjectMetricsProps {
  project: Project;
}

const ProjectMetrics: React.FC<ProjectMetricsProps> = ({ project }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Impact & Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {metric.prefix}{metric.value}{metric.suffix}
              </div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectMetrics;