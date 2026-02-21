import photoSrc from "../images/avatarL.jpg";

const AboutMe = () => {
  return (
    <div className="tab-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-5 col-lg-5">
            <img
              src={photoSrc}
              alt="head shot of Olga Gavrushenko"
              className="img-thumbnail"
            />
          </div>
          <div className="col-sm-10 col-md-7 col-lg-7 aboutMe text-break">
            <p>
              Full-Stack Software Engineer with 3+ years of hands-on development
              experience building responsive web applications using React,
              TypeScript, and Node.js. Strong foundation in frontend
              architecture, REST API design, and third-party integrations. 10+
              years working in software engineering environments, bringing deep
              understanding of system design, testing strategy, CI/CD, and
              production reliability. Passionate about clean architecture,
              performance optimization, and delivering scalable user-focused
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
