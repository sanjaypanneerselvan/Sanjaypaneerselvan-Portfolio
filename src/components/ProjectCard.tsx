import React from 'react';
import { Github, Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  githubLink: string;
  demoLink?: string;
  image?: string;
  tech?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  date,
  githubLink,
  demoLink,
  image,
  tech = []
}) => {
  const hasDemo = Boolean(demoLink);

  return (
    <div className="bg-[#0f172a] rounded-xl shadow-lg p-4 flex flex-col hover:scale-[1.02] transition-all duration-300 border border-violet-900/20 group">
      {/* Optional Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-4 object-cover w-full h-40"
        />
      )}

      {/* Title and Date */}
      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-400 mb-2">{date}</p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="bg-violet-700/20 text-violet-200 text-xs px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-4 flex-grow">{description}</p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-auto">
        {/* GitHub Button */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-white bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-md text-sm transition-colors"
        >
          <Github size={18} />
          <span>Code</span>
        </a>

        {/* Live Demo Button with Tooltip */}
        <span
          title={!hasDemo ? 'Coming soon' : ''}
          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-md text-sm transition-colors
            ${hasDemo
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-blue-600/30 text-blue-300 cursor-not-allowed'}
          `}
          style={{ pointerEvents: hasDemo ? 'auto' : 'none' }}
        >
          {hasDemo ? (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <Play size={18} />
              <span>Live</span>
            </a>
          ) : (
            <>
              <Play size={18} />
              <span>Live</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
