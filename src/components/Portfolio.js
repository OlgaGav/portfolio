import imageProject1 from "./img/project1.png";
import imageProject2 from "./img/project2.jpg";
import imageProject3 from "./img/weather.jpg";
import imageProject4 from "./img/manuscript.jpg";
import imageProject5 from "./img/project-pastel-puzzles.jpg";
import imageProject6 from "./img/project-led-wall.jpg";
import imageProject7 from "./img/leadstack.jpg";
import imageProject8 from "./img/tetris.png";
import imageProject9 from "./img/salon-a.png";
import Project from "./Project";

const Portfolio = () => {
  const projects = [
    {
      id: 9,
      title: "Hair-Salon-Booking-App",
      gitHubLink: "https://github.com/olgagav/salon-a",
      applLink: "https://olgagav.github.io/salon-a/",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      imgSrc: imageProject9,
    },
        {
      id: 8,
      title: "Tetris Game",
      gitHubLink: "https://github.com/OlgaGav/tetris",
      applLink: "https://olgagav.github.io/tetris/",
      techStack: [
        "Node",
        "VanillaJavaScript",
      ],
      imgSrc: imageProject8,
    },
    {
      id: 7,
      title: "LeadStack",
      gitHubLink: "https://github.com/isayahdurst/leadstack",
      applLink: "https://lead-stack.herokuapp.com/",
      techStack: [
        "Node",
        "Express",
        "MongoDB",
        "Mongoose",
        "GraphQL, Apollo Server/Client",
        "JavaScript",
        "React",
        "Chakra UI",
        "JWT, bcrypt",
      ],
      imgSrc: imageProject7,
    },
    {
      id: 6,
      title: "Centiment",
      gitHubLink: "https://github.com/isayahdurst/centiment",
      applLink: "https://centiment-inc.herokuapp.com",
      techStack: [
        "Node",
        "Express",
        "Dotenv",
        "MySQL",
        "Sequelize",
        "Bcyrpt",
        "JWT",
        "Cookies",
        "Handlebars",
        "Bulma CSS",
        "Multer",
      ],
      imgSrc: imageProject2,
    },
    {
      id: 5,
      title: "What are we craving today?",
      gitHubLink: "https://github.com/OlgaGav/what-am-i-craving-today",
      applLink: "https://olgagav.github.io/what-am-i-craving-today/",
      techStack: ["JavaScript", "HTML", "CSS", "API"],
      imgSrc: imageProject1,
    },
    {
      id: 4,
      title: "Weather Forecast Dashboard",
      gitHubLink: "https://github.com/OlgaGav/weather-dashboard-5-day-forecast",
      applLink: "https://olgagav.github.io/weather-dashboard-5-day-forecast/",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "OpenWeather API"],
      imgSrc: imageProject3,
    },
    {
      id: 3,
      title: "Simple Blog",
      gitHubLink: "https://github.com/OlgaGav/share-ideas-tech-blog",
      applLink: "https://share-ideas-tech-blog.herokuapp.com/",
      techStack: [
        "HTML",
        "CSS",
        "Materialize",
        "JavaScript",
        "MySQL",
        "Sequelize",
        "Express, express-handlebars",
        "bcrypt",
        "Node.js",
        "Heroku",
      ],
      imgSrc: imageProject4,
    },
    {
      id: 2,
      title: "Quiz Simple",
      gitHubLink: "https://github.com/OlgaGav/quick-javascript-quiz",
      applLink: "https://olgagav.github.io/quick-javascript-quiz/",
      techStack: ["HTML", "CSS", "JavaScript"],
      imgSrc: imageProject5,
    },
    {
      id: 1,
      title: "Password Generator",
      gitHubLink: "https://github.com/OlgaGav/password-generator",
      applLink: "https://olgagav.github.io/password-generator/",
      techStack: ["HTML", "CSS", "JavaScript"],
      imgSrc: imageProject6,
    },
  ];

  return <Project projects={projects} />;
};

export default Portfolio;
