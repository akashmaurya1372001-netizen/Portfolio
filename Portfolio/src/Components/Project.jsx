import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";



 function ProjectCard({
  title,
  description,
  image,
  tech = [],
  liveLink,
  githubLink,
  featured = false,
}) {
  return (<>
    
    <div className="relative bg-green-100  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1 w-full md:w-80">
      
      {/* Featured Badge */}
      {featured && (
        <span className="absolute top-3 left-3 bg-indigo-500 text-xs font-semibold px-2 py-1 rounded">
          Featured
        </span>
      )}

      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5 flex flex-col">
        <h3 className="text-xl font-semibold ">{title}</h3>

        <p className=" text-sm mt-2 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.length > 0 ? (
            tech.map((item, index) => (
              <span
                key={index}
                className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded"
              >
                {item}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-500">No tech listed</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm bg-indigo-500 px-3 py-1.5 rounded text-white hover:bg-indigo-400 transition"
            >
              <FaExternalLinkAlt className="text-xs" /> Live
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm border border-gray-600 px-3 py-1.5 rounded  hover:bg-white transition"
            >
              <FaGithub className="text-xs" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
export default ProjectCard;