import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../projectsData';
import ProjectHero from './ProjectHero';
import ProjectNavigation from './components/ProjectNavigation';
import ProjectOverview from './sections/ProjectOverview';
import ProjectMetrics from './sections/ProjectMetrics';
import ProjectTechnologies from './sections/ProjectTechnologies';
import ProjectGallery from './ImageGallery';
import ProjectLearnings from './sections/ProjectLearnings';
import ProjectCallToAction from './components/ProjectCallToAction';
import ProjectNotFound from './components/ProjectNotFound';

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProjectHero
        title={project.title}
        tagline={project.description}
        image={project.image}
      />
      <ProjectNavigation />
      <ProjectOverview project={project} />
      <ProjectMetrics project={project} />
      <ProjectTechnologies project={project} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Project Gallery</h2>
          <ProjectGallery images={project.gallery} />
        </div>
      </section>
      <ProjectLearnings project={project} />
      <ProjectCallToAction />
    </div>
  );
};

export default ProjectDetails;