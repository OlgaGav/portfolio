import { skillGroups } from "../data/skills";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "./dist/OlgaGavrushenkoResume.pdf";
  link.download = "OlgaGavrushenkoResume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Resume = () => {
  return (
    <div className="tab-container">
      <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">
        <h2 style={{ marginBottom: 0 }}>Resume</h2>
        <button className="btn-teal" onClick={handleDownload}>
          Download PDF
        </button>
      </div>

      <h4
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--brand-warm-gray)",
          marginBottom: "1.25rem",
        }}
      >
        Technical Skills
      </h4>

      <div className="row g-4">
        {skillGroups.map((group) => (
          <div className="col-md-4" key={group.key}>
            <div className={`resume-skill-group ${group.colorClass}`}>
              <h5 style={{ color: group.titleColor }}>{group.title}</h5>
              <div>
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      padding: "0.3rem 0",
                      borderBottom: "1px solid #f0ede9",
                      fontSize: "0.9rem",
                      color: "var(--brand-slate)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
