import React from 'react';
import { Brain, Bot, Database, Code2, Network, Cpu } from 'lucide-react';
import ExpertiseCard from './ExpertiseCard';
import TimelineItem from './Timeline';
import Achievements from './Achievements';

const About = () => {
  const expertise = [
    {
      icon: Brain,
      title: 'Transformers & LLMs',
      description: 'Expert in BERT, GPT, and T5 models for various NLP tasks',
    },
    {
      icon: Bot,
      title: 'Conversational AI',
      description: 'Building intelligent chatbots and dialogue systems',
    },
    {
      icon: Database,
      title: 'MLOps & Deployment',
      description: 'Streamlined deployment using Docker and cloud platforms',
    },
    {
      icon: Code2,
      title: 'Deep Learning',
      description: 'PyTorch & TensorFlow implementation of custom architectures',
    },
    {
      icon: Network,
      title: 'NLP Solutions',
      description: 'Text classification, NER, and sentiment analysis',
    },
    {
      icon: Cpu,
      title: 'Model Optimization',
      description: 'Performance tuning and model compression techniques',
    },
  ];

  const timeline = [
    {
      year: '2023-Present',
      title: 'Data Analytics Associate',
      company: 'ZS Associates',
      description: 'Design and implement advanced analytics and machine learning solutions to optimize marketing and customer engagement strategies for clients. My role involves developing custom Deep Learning solutions using transformer architecture for Next Best Engagement prediction',
    },
    {
      year: '2022-23',
      title: 'AI Mentor',
      company: 'Intel',
      description: 'Acted as an AI mentor for Intel, providing comprehensive guidance to aspiring professionals in understanding and implementing advanced AI techniques. Focused on practical applications, fostering innovation, and equipping mentees with industry-relevant skills.',
    },
    {
      year: '2022',
      title: 'Data Engineer Intern',
      company: 'PwC India',
      description: 'Developed data pipelines with Apache Beam and automated their workflows using Airflow. Analyzed data using GCP BigQuery and designed interactive dashboards with GCP Data Studio.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bio Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
           I am a passionate Data Scientist with expertise in crafting custom chat-based solutions powered by state-of-the-art transformer architectures. With a strong foundation in A/B testing, model validation, and deploying scalable AI systems, I thrive at the intersection of innovation and problem-solving, delivering impactful insights and solutions.
          </p>
        </div>

        {/* Professional Journey */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Journey</h3>
          <div className="space-y-6">
            {timeline.map((item) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                title={item.title}
                company={item.company}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <Achievements />

        {/* Expertise Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item) => (
              <ExpertiseCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;