import { useState } from "react";
import { BsArrowRight, BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { articles } from "../data/articles";
import ArticleView from "./ArticleView";

const FRAMEWORKS = [
  {
    id: 1,
    name: "Playwright JS Framework Template",
    description:
      "Production-ready Playwright framework with Page Object Model, custom fixtures, Allure reporting, and GitHub Actions CI integration. Clone and use as a starting point for any web automation project.",
    tags: ["JavaScript", "Playwright", "POM", "Allure", "GitHub Actions"],
    githubUrl: "https://github.com/OlgaGav/playwright",
  },
];

const LINKS = [
  {
    title: "Playwright — Official Documentation",
    url: "https://playwright.dev/docs/intro",
    description: "Getting started guide, API reference, and configuration docs.",
  },
  {
    title: "Playwright — Best Practices",
    url: "https://playwright.dev/docs/best-practices",
    description: "Official best practices for writing reliable, maintainable tests.",
  },
  {
    title: "Testing Library — Guiding Principles",
    url: "https://testing-library.com/docs/guiding-principles",
    description: "Principles for tests that resemble how users actually use the software.",
  },
  {
    title: "Google Testing Blog",
    url: "https://testing.googleblog.com/",
    description: "Articles on test strategy, architecture, and tooling from Google engineers.",
  },
];

const TestAutomation = ({ onNavigate }) => {
  const [activeArticle, setActiveArticle] = useState(null);

  if (activeArticle) {
    const article = articles.find((a) => a.slug === activeArticle);
    return (
      <div className="tab-container">
        <ArticleView
          article={article}
          onBack={() => setActiveArticle(null)}
          backLabel="Back to Test Automation"
        />
      </div>
    );
  }

  return (
    <div className="tab-container">
      <h2 className="mb-1">Test Automation</h2>
      <p style={{ color: "var(--brand-warm-gray)", marginBottom: "2.5rem", maxWidth: "600px" }}>
        Framework templates, curated resources, and articles on building maintainable
        automation with Playwright and beyond.
      </p>

      {/* Frameworks */}
      <div className="mb-5">
        <p className="ta-section-title">Framework Templates</p>
        <div className="row g-4">
          {FRAMEWORKS.map((fw) => (
            <div className="col-md-6" key={fw.id}>
              <div className="ta-framework-card">
                <div className="d-flex align-items-start justify-content-between mb-2">
                  <h5
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "var(--brand-slate)",
                      margin: 0,
                    }}
                  >
                    {fw.name}
                  </h5>
                  <a
                    href={fw.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--brand-teal)", fontSize: "1.2rem", flexShrink: 0, marginLeft: "0.75rem" }}
                    aria-label="View on GitHub"
                  >
                    <BsGithub />
                  </a>
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--brand-warm-gray)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {fw.description}
                </p>
                <div className="mb-3">
                  {fw.tags.map((tag) => (
                    <span key={tag} className="tech-pill">{tag}</span>
                  ))}
                </div>
                <a
                  href={fw.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal"
                  style={{ fontSize: "0.85rem", padding: "0.4rem 1rem" }}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices Links */}
      <div className="mb-5">
        <p className="ta-section-title">Best Practices &amp; Resources</p>
        <div style={{ background: "white", borderRadius: "8px", padding: "0.25rem 1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          {LINKS.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ta-link-item"
            >
              <BsBoxArrowUpRight
                style={{ flexShrink: 0, marginTop: "3px", color: "var(--brand-teal)", fontSize: "0.85rem" }}
              />
              <div>
                <div className="ta-link-title">{link.title}</div>
                <div className="ta-link-desc">{link.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Articles preview */}
      <div>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <p className="ta-section-title mb-0">Articles</p>
          {onNavigate && (
            <button
              onClick={() => onNavigate("articles")}
              style={{
                background: "none",
                border: "none",
                color: "var(--brand-teal)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: 0,
              }}
            >
              View all <BsArrowRight />
            </button>
          )}
        </div>
        <div className="row g-3">
          {articles.map((article) => (
            <div className="col-md-6 col-lg-5" key={article.slug}>
              <button
                className="ta-article-card w-100 text-start border-0"
                onClick={() => setActiveArticle(article.slug)}
              >
                <div className="d-flex justify-content-between align-items-start mb-1">
                  <h5
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "0.97rem",
                      color: "var(--brand-slate)",
                      margin: 0,
                    }}
                  >
                    {article.title}
                  </h5>
                  <span className="ta-article-read-time ms-2 flex-shrink-0">{article.readTime}</span>
                </div>
                <p className="ta-article-summary mb-2">{article.summary}</p>
                <div>
                  {article.tags.map((tag) => (
                    <span key={tag} className="skill-badge skill-badge-teal" style={{ fontSize: "0.72rem" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestAutomation;
