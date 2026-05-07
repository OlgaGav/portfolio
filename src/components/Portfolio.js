import { useState } from "react";
import Project from "./Project";
import projects from "../data/projects.json";

const categories = [
  { id: "professional", label: "Professional Work" },
  { id: "pet", label: "Pet Projects" },
  { id: "bootcamp", label: "Learning Journey" },
];

const categoryDescriptions = {
  professional: "Applications that I build to support small businesses, from design to development and deployment.",
  pet: "Personal projects that I build to explore new technologies and concepts.",
  bootcamp:
    "Projects I built while studying at UC Berkeley Full-Stack Coding Bootcamp — showing my foundation and growth as a developer.",
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("professional");
  const filtered = projects.filter((p) => p.category === activeCategory);

  return (
    <div className="tab-container">
      <h2 className="mb-3">Projects</h2>
      <ul className="nav nav-pills portfolio-pills mb-4">
        {categories.map((cat) => (
          <li key={cat.id} className="nav-item">
            <button
              className={`nav-link ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
      {categoryDescriptions[activeCategory] && (
        <p
          className="mb-4"
          style={{ color: "var(--brand-warm-gray)", fontSize: "0.95rem", maxWidth: "640px" }}
        >
          {categoryDescriptions[activeCategory]}
        </p>
      )}
      <Project projects={filtered} category={activeCategory} />
    </div>
  );
};

export default Portfolio;
