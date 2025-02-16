import React from 'react';
import { motion } from 'framer-motion';

interface Metric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

interface ProjectMetricsProps {
  metrics: Metric[];
}

const ProjectMetrics: React.FC<ProjectMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <div className="text-3xl font-bold text-primary-600 mb-2">
            {metric.prefix}
            {metric.value}
            {metric.suffix}
          </div>
          <div className="text-gray-600">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectMetrics;