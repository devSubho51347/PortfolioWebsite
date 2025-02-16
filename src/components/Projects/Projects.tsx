import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of my recent work in AI and machine learning, showcasing real-world applications
            of transformer models and deep learning techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              metrics={project.metrics.map(m => `${m.prefix || ''}${m.value}${m.suffix || ''} ${m.label}`)}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;