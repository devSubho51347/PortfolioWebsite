import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  metrics?: string[];
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  metrics,
  slug,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <Link to={`/project/${slug}`} className="block mb-4">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </Link>
        
        {metrics && metrics.length > 0 && (
          <div className="mt-4 space-y-2">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                {metric}
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex space-x-4">
          {demoUrl && (
            <a
              href={demoUrl}
              className="inline-flex items-center text-sm text-primary-600 hover:text-primary-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-1" />
              View Code
            </a>
          )}
          <Link
            to={`/project/${slug}`}
            className="inline-flex items-center text-sm text-primary-600 hover:text-primary-800 ml-auto"
          >
            View Details
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;