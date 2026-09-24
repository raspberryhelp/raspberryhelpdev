import { Link } from "react-router-dom";
import { projects } from "../data/projectdata.jsx";

function Projects() {
  return (
    <div class="about-container">
    <div className="toolCard">
    <div className="toolTitle">Click on any of these to see more about my projects!!!</div>
      <div className="projects-grid" style={{padding: "10px"}}>
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/Projects/${project.id}`}
            className="project-card"
          >

            <div className="toolContent">{project.title}</div>

          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;