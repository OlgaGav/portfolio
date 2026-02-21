const Project = ({ projects }) => {
  return (
    <div className="tab-container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-8 g-3">
        {projects.map((project, index) => (
          <div className="col">
            <div className="card" key={index}>
              <img
                src={`${process.env.PUBLIC_URL}${project.imgSrc}`}
                alt={project.title}
                className="img-project card-img-top"
              />

              <div className="project-header">
                <h5>{project.title}</h5>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.gitHubLink}
                >
                  GitHub
                </a>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.applLink}
                >
                  View appl.
                </a>
              </div>
              <div className="card-body">
                <span className="bold">Tech Stack: </span> {project.techStack.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
