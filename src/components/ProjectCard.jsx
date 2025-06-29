// src/components/ProjectCard.jsx
import React from "react"

const ProjectCard = ({
  title,
  status,
  description,
  technologies = [],
  liveUrl,
  githubUrl,
  gradientColors = "from-blue-500 to-purple-600",
  imageUrl,
  imageAlt,
}) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in progress":
        return "bg-yellow-100 text-yellow-800"
      case "planning":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTechColor = (tech, index) => {
    const colors = [
      "bg-blue-100 text-blue-800",
      "bg-green-100 text-green-800",
      "bg-purple-100 text-purple-800",
      "bg-orange-100 text-orange-800",
      "bg-indigo-100 text-indigo-800",
      "bg-pink-100 text-pink-800",
      "bg-yellow-100 text-yellow-800",
      "bg-gray-100 text-gray-800",
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Header Image/Gradient */}
      <div className="h-48 relative overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt || `${title} project screenshot`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradientColors}`}
          ></div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Title and Status */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded ${getTechColor(
                tech,
                index
              )}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-3">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              {status.toLowerCase() === "completed" ? "View Live" : "Preview"}
            </a>
          ) : (
            <span className="text-gray-400 text-sm font-medium">
              Coming Soon
            </span>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
