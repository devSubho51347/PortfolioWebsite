import React from 'react';
import { useParallaxScroll } from '../../../utils/scroll';

interface ProjectHeroProps {
  title: string;
  tagline: string;
  image: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ title, tagline, image }) => {
  const offset = useParallaxScroll();

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-200">{tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;