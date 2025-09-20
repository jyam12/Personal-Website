import React from "react";
const BASE_URL = import.meta.env.BASE_URL;

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-background/50 shadow-lg transition-all duration-300 hover:shadow-accent/50"
    >
      <img
        src={BASE_URL + project.imageUrl}
        alt={project.name}
        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 w-full p-4 text-text">
        <h3 className="text-lg font-bold">{project.name}</h3>
        <p className="text-sm text-slate-300">{project.tagline}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-tag px-2 py-1 text-xs font-medium text-tag-text"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
