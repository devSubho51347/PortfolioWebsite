import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../projectsData';
import { BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';

interface ProjectLearningsProps {
  project: Project;
}

const ProjectLearnings: React.FC<ProjectLearningsProps> = ({ project }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-primary-100 rounded-full mb-4"
          >
            <BookOpen className="w-6 h-6 text-primary-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900">Challenges & Learnings</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Challenges Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-6 h-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Challenges Faced</h3>
            </div>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary-600" />
                  <p className="text-gray-600">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Learnings Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <div className="flex items-center mb-6">
              <CheckCircle className="w-6 h-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Key Learnings</h3>
            </div>
            <div className="space-y-4">
              {project.learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary-600" />
                  <p className="text-gray-600">{learning}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLearnings;