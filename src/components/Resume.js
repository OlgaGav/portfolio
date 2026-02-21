const frontEndSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "Responsive design",
  "React",
  "Bootstrap",
];
const backEndSkills = [
  "APIs",
  "Node",
  "Express",
  "MySQL, Sequalize",
  "MongoDB, Mongoose",
  "REST",
  "GraphQL",
];
const otherSkills = [
  "Java",
  "Selenium WebDriver (Java)",
  "RestAssured (REST API testing)",
  "Requirements analysis",
  "Project Management and Bug Tracking Tools: Jira, Bugzilla, BUGDB",
  "Version Control Systems: Git, Perforce",
  "Continuous integration tools: Jenkins",
];

const handleDownload = () => {
  // const pdfUrl = './public/dist/OlgaGavrushenkoResume.pdf';
  const pdfUrl = "./dist/Resume_Olga_Gavrushenko.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Olga_Gavrushenko_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Resume = () => {
  return (
    <div className="tab-container">
      <div>
        <h2>Resume Page</h2>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-primary custom-button"
          onClick={handleDownload}
        >
          Download my resume
        </button>
      </div>
      <div className="skills">
        <h4>Front-End Proficiences</h4>
        <ul>
          {frontEndSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h4>Backend-End Proficiences</h4>
        <ul>
          {backEndSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h4>Other</h4>
        <ul>
          {otherSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
