import photoSrc from "../images/avatarL.jpg";
import { skillGroups } from "../data/skills";
import SkillCloud from "./SkillCloud";

const AboutMe = ({ onNavigate }) => {
  return (
    <>
      <section className="hero-section">
        <div className="container-fluid px-0">
          <div className="row align-items-center mx-0">
            <div className="col-lg-7 col-md-6 px-3 px-lg-5">
              <p className="hero-subtitle">Full-Stack Engineer &amp; QA Lead</p>
              <h1 className="hero-name">Olga Gavrushenko</h1>
              <p className="hero-intro">
                Software Development Engineer in Test with 10 years of
                experience in software testing and quality assurance,
                specializing in web applications and API testing. Passionate
                about building scalable test automation frameworks and improving
                software quality through robust UI and API testing using
                Playwright, Selenium WebDriver, and RestAssured. Have experience
                in software development.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button
                  className="btn-teal"
                  onClick={() => onNavigate("portfolio")}
                >
                  View My Work
                </button>
                <a
                  className="btn-coral-outline"
                  href={`${process.env.PUBLIC_URL}/dist/OlgaGavrushenkoResume.pdf`}
                  download="OlgaGavrushenkoResume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 d-flex justify-content-center mt-4 mt-md-0 px-3">
              <img
                src={photoSrc}
                alt="Olga Gavrushenko"
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2 style={{ fontSize: "1.7rem", marginBottom: "0.5rem" }}>Skills</h2>
          <p className="skill-cloud-hint">Bubble size reflects proficiency level</p>
          <SkillCloud skillGroups={skillGroups} />
          <div className="skill-cloud-legend">
            {skillGroups.map((group) => (
              <span key={group.key} className="skill-cloud-legend-item">
                <span className={`skill-cloud-legend-dot ${group.badgeClass}`} />
                {group.title}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
