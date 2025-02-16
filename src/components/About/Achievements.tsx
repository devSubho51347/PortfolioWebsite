import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Intel AI Mentor',
      description: 'Selected as one of the top AI mentors for Intel\'s global mentorship program',
      year: '2023'
    },
    {
      icon: Award,
      title: 'Best ML Implementation',
      description: 'Awarded for developing an innovative BERT-based solution for customer engagement',
      year: '2022'
    },
    {
      icon: Star,
      title: 'Research Publication',
      description: 'Published paper on "Optimizing Transformer Models for Production" in leading AI conference',
      year: '2023'
    }
  ];

  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Notable Achievements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-primary-50 p-3 rounded-lg">
                <achievement.icon className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{achievement.title}</h4>
                <p className="text-sm text-primary-600 mb-2">{achievement.year}</p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;