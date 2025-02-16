import React from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  description: string;
  icon: string;
}

interface TechStackProps {
  technologies: TechItem[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
          <p className="text-sm text-gray-600">{tech.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;