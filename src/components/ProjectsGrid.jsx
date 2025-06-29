// src/components/ProjectsGrid.jsx
import React from "react"
import ProjectCard from "./ProjectCard"

const ProjectsGrid = ({ projects = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id || index}
          title={project.title}
          status={project.status}
          description={project.description}
          technologies={project.technologies}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          gradientColors={project.gradientColors}
          imageUrl={project.imageUrl}
          imageAlt={project.imageAlt}
        />
      ))}
    </div>
  )
}

export default ProjectsGrid
