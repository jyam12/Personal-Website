import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard.jsx";
import Project from "./project_detail";
import { projects } from "../assets/data/project.js";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    []
  );

  // Filter projects based on the active category
  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  function openModal(project) {
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <section className="min-h-screen w-full bg-background pt-20 pb-16 text-text">
      <div className="mx-auto max-w-9/10 space-y-5 px-4 sm:px-20">
        <div className="space-y-8">
          <h2 className="text-left text-5xl font-bold underline decoration-accent decoration-2 underline-offset-8 md:text-left">
            Experience
          </h2>
        </div>

        <p className="mt-4 text-lg text-text">
          Here are some of the projects I've done. Click on any project to see
          more details.
        </p>

        {/* === NEW: Filter Buttons Box === */}
        <div className="my-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors
                ${
                  activeCategory === category
                    ? "bg-accent text-text"
                    : "bg-tag text-tag-text hover:bg-slate-800"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* === UPDATED: Projects Grid === */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>

      <Project
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
