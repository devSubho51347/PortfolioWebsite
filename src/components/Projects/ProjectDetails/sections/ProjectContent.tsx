import React from 'react';
import ProjectSection from '../ProjectSection';
import ProjectMetrics from '../ProjectMetrics';
import TechStack from '../TechStack';
import ImageGallery from '../ImageGallery';
import { Project } from '../../projectsData';

interface ProjectContentProps {
  project: Project;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <>
      <ProjectSection title="Problem Statement">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">{project.problemStatement}</p>
        </div>
      </ProjectSection>

      <ProjectSection title="Solution" className="bg-white">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">{project.solution}</p>
        </div>
      </ProjectSection>

      <ProjectSection title="Impact & Results">
        <ProjectMetrics metrics={project.metrics} />
      </ProjectSection>

      <ProjectSection title="Technology Stack" className="bg-white">
        <TechStack technologies={project.technologies} />
      </ProjectSection>

      <ProjectSection title="Project Gallery">
        <ImageGallery images={project.gallery} />
      </ProjectSection>

      <ProjectSection title="Challenges & Learnings" className="bg-white">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">{project.challenges}</p>
          <h3 className="text-xl font-semibold mt-6 mb-4">Key Learnings</h3>
          <ul className="list-disc pl-6 space-y-2">
            {project.learnings.map((learning, index) => (
              <li key={index} className="text-gray-600">{learning}</li>
            ))}
          </ul>
        </div>
      </ProjectSection>
    </>
  );
};

export default ProjectContent;