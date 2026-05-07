const categoryLabel = {
  professional: "Client Work",
  pet: "Personal",
  bootcamp: "Bootcamp",
};

const categoryClass = {
  professional: "badge-professional",
  pet: "badge-pet",
  bootcamp: "badge-bootcamp",
};

const colClass = {
  professional: "col-12 col-md-6",
  pet: "col-12 col-sm-6 col-md-4",
  bootcamp: "col-12 col-sm-6 col-md-4 col-xl-3",
};

const Project = ({ projects, category }) => {
  const col = colClass[category] || "col-12 col-sm-6 col-md-4";

  return (
    <div className="row g-4">
      {projects.map((project) => (
        <div className={col} key={project.id}>
          <div className="card h-100 border-0 shadow-sm">
            <div className="img-overlay-wrapper">
              {project.imgSrc ? (
                <img
                  src={`${process.env.PUBLIC_URL}${project.imgSrc}`}
                  alt={project.title}
                  className={project.category === 'bootcamp' ? "img-project-card-bootcamp" : "img-project-card"}
                />
              ) : (
                <div className="project-no-image">
                  {project.title.charAt(0)}
                </div>
              )}
              <div className="img-overlay">
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn overlay-btn-github"
                  >
                    GitHub
                  </a>
                )}
                {project.applLink && (
                  <a
                    href={project.applLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn overlay-btn-live"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </div>

            <div className="card-body" style={{ backgroundColor: "white" }}>
              <div className="d-flex align-items-start justify-content-between mb-1 gap-2">
                <h5
                  className="card-title mb-0"
                  style={{ fontSize: "0.97rem", color: "var(--brand-slate)", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  {project.title}
                </h5>
                <span className={`category-badge flex-shrink-0 ${categoryClass[project.category]}`}>
                  {categoryLabel[project.category]}
                </span>
              </div>

              {project.description && (
                <p
                  style={{
                    fontSize: "0.83rem",
                    color: "var(--brand-warm-gray)",
                    marginTop: "0.4rem",
                    marginBottom: "0.65rem",
                    lineHeight: 1.5,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {project.description}
                </p>
              )}

              <div>
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
