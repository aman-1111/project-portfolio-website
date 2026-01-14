const ProjectCard = ({ title, description, tech, github, live }) => {
  const techArray = Array.isArray(tech) ? tech : [];

  return (
    <div className="bg-[#020617]/80 border border-blue-500/20 rounded-xl p-6 hover:scale-[1.02] transition">
      <h3 className="text-xl font-semibold mb-2 text-blue-400">
        {title}
      </h3>

      <p className="text-sm text-gray-300 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techArray.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            className="text-sm text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
          >
            GitHub
          </a>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            className="text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
