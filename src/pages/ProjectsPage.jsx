// src/pages/ProjectsPage.jsx
import ProjectsGrid from "../components/ProjectsGrid"
import { projectsData } from "../data/projectsData"

const ProjectsPage = () => {
  return (
    <div className="full-height flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b flex-shrink-0 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
          <p className="text-gray-600 mt-2">
            A collection of my work and personal projects
          </p>
        </div>
      </header>

      {/* Main Content - takes remaining space */}
      <main className="flex-1 bg-gray-50 py-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-auto">
        <ProjectsGrid projects={projectsData} />
      </main>
    </div>
  )
}

export default ProjectsPage
