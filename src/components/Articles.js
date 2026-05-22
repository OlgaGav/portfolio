import { useState } from "react";
import { articles } from "../data/articles";
import ArticleView from "./ArticleView";

const Articles = () => {
  const [activeSlug, setActiveSlug] = useState(null);

  if (activeSlug) {
    const article = articles.find((a) => a.slug === activeSlug);
    return (
      <div className="tab-container">
        <ArticleView
          article={article}
          onBack={() => setActiveSlug(null)}
          backLabel="Back to Articles"
        />
      </div>
    );
  }

  return (
    <div className="tab-container">
      <h2 className="mb-1">Articles</h2>
      <p
        style={{
          color: "var(--brand-warm-gray)",
          marginBottom: "2.5rem",
          maxWidth: "600px",
        }}
      >
        Notes, guides, and best practices on test automation and software development.
      </p>

      {articles.length === 0 ? (
        <p style={{ color: "var(--brand-warm-gray)" }}>No articles published yet — check back soon.</p>
      ) : (
        <div className="row g-4">
          {articles.map((article) => (
            <div className="col-md-6 col-lg-5" key={article.slug}>
              <button
                className="ta-article-card w-100 text-start border-0"
                onClick={() => setActiveSlug(article.slug)}
              >
                <div className="d-flex justify-content-between align-items-start mb-1 gap-2">
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
                  <span className="ta-article-read-time ms-1 flex-shrink-0">
                    {article.readTime}
                  </span>
                </div>

                <p className="ta-article-summary mb-2">{article.summary}</p>

                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <div>
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-badge skill-badge-teal"
                        style={{ fontSize: "0.72rem" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {article.publishedDate && (
                    <span className="ta-article-read-time">
                      {new Date(article.publishedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Articles;
