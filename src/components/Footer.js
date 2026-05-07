import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <a
        className="footer-link"
        href="https://github.com/OlgaGav"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <BsGithub />
      </a>
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/olga-gavrushenko/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default Footer;
