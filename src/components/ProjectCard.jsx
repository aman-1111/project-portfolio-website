import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-5 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-4 w-full h-48 object-cover border border-gray-700"
      />
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="bg-gray-800 text-blue-400 text-xs px-2 py-1 rounded-md border border-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex justify-between">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300 font-medium"
          >
            🔗 GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-400 hover:text-green-300 font-medium"
          >
            🚀 Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
