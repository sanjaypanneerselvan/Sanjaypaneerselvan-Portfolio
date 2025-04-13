import React from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, date, githubLink }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:-translate-y-2 transition-transform group">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{date}</p>
      <p className="text-gray-300 mb-6">{description}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors"
      >
        <Github size={20} />
        <span>View on GitHub</span>
      </a>
    </div>
  );
};

export default ProjectCard;