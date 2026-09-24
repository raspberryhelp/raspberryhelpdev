import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projectdata.jsx";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
    (project) => project.id === projectId
  );

  if (!project) {
    return (
      <div>
        <h1>Project Not Found</h1>
        <Link to="/Projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-details">

      <h1>{project.title}</h1>
        <div className={`project-status ${project.progress}`}>
        {project.progress}
      </div>

      <div className="project-description">
        {project.description}
      </div>

      <div className="toolTitle">Technologies</div>

      <div className="technologies">
        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="toolTitle">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    <Link to="/Projects">
        ← Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetails;