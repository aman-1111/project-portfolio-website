import React, { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === filter);

  const categories = ["all", "python", "react", "cybersecurity"];

  return (
    <section className="bg-gray-950 text-white py-10 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
          My Projects
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                filter === cat
                  ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                  : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
