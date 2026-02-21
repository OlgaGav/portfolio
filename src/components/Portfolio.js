import Project from "./Project";
import projects from "../data/projects.json";

const Portfolio = () => {
  return <Project projects={projects} />;
};

export default Portfolio;
