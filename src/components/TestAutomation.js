import { useState } from "react";
import { BsArrowLeft, BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

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

const ARTICLES = [
  {
    slug: "playwright-pom",
    title: "Page Object Model with Playwright JS",
    tags: ["Playwright", "POM", "Architecture"],
    readTime: "5 min read",
    summary:
      "How to structure your Playwright tests using the Page Object Model for maintainable, scalable automation.",
  },
];

const ArticleContent = ({ slug }) => {
  if (slug === "playwright-pom") {
    return (
      <div className="article-content">
        <p>
          The <strong>Page Object Model (POM)</strong> is a design pattern that creates an
          abstraction layer between your test logic and the UI. Each page (or significant
          component) in your application gets a corresponding class that encapsulates all its
          locators and user-facing actions.
        </p>

        <h3>Why use POM?</h3>
        <ul>
          <li>Locators live in one place — update once when the UI changes, not across every test</li>
          <li>Tests read like user journeys, not CSS selector soup</li>
          <li>Page actions are reusable across multiple test files</li>
          <li>Separation of concerns: <em>what</em> to do (tests) vs <em>how</em> to do it (page objects)</li>
        </ul>

        <h3>File structure</h3>
        <p>
          In the{" "}
          <a href="https://github.com/OlgaGav/playwright" target="_blank" rel="noreferrer">
            framework template
          </a>
          , pages live in <code>src/pages/</code> and tests in <code>tests/</code>:
        </p>
        <pre>
          <code>{`playwright-framework/
├── src/
│   ├── pages/
│   │   ├── LoginPage.js
│   │   └── DashboardPage.js
│   └── fixtures/
│       └── index.js
├── tests/
│   └── auth.spec.js
└── playwright.config.js`}</code>
        </pre>

        <h3>A basic page class</h3>
        <pre>
          <code>{`// src/pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    // Use role/label locators — resilient to DOM structure changes
    this.emailInput    = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton  = page.getByRole('button', { name: 'Log in' });
    this.errorMessage  = page.getByRole('alert');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

module.exports = { LoginPage };`}</code>
        </pre>

        <h3>Using it in a test</h3>
        <pre>
          <code>{`// tests/auth.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/pages/LoginPage');

test('redirects to dashboard after valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('user@example.com', 'correct-password');

  await expect(page).toHaveURL('/dashboard');
});

test('shows error on invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('user@example.com', 'wrong-password');

  await expect(loginPage.errorMessage).toBeVisible();
});`}</code>
        </pre>

        <h3>Cleaner tests with fixtures</h3>
        <p>
          Playwright fixtures let you inject pre-instantiated page objects directly into tests,
          removing the <code>new LoginPage(page)</code> boilerplate from every file:
        </p>
        <pre>
          <code>{`// src/fixtures/index.js
const { test: base } = require('@playwright/test');
const { LoginPage }  = require('../pages/LoginPage');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

module.exports = { test, expect: base.expect };`}</code>
        </pre>
        <pre>
          <code>{`// tests/auth.spec.js (with fixtures)
const { test, expect } = require('../src/fixtures');

test('redirects to dashboard after login', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('user@example.com', 'password');
  await expect(loginPage.page).toHaveURL('/dashboard');
});`}</code>
        </pre>

        <h3>Key rules to follow</h3>
        <ul>
          <li>
            Prefer <code>getByRole</code>, <code>getByLabel</code>, <code>getByText</code> over
            CSS or XPath — they match how users perceive the page and survive markup refactors
          </li>
          <li>Keep assertions in tests, not inside page objects</li>
          <li>Name methods after user intent: <code>login()</code> beats <code>clickSubmitButton()</code></li>
          <li>One action per method — keep page objects composable and small</li>
          <li>
            Avoid <code>page.waitForTimeout()</code> — use auto-waiting assertions like{" "}
            <code>expect(locator).toBeVisible()</code> instead
          </li>
        </ul>
      </div>
    );
  }
  return null;
};

const TestAutomation = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  if (activeArticle) {
    const article = ARTICLES.find((a) => a.slug === activeArticle);
    return (
      <div className="tab-container">
        <button className="article-back-btn" onClick={() => setActiveArticle(null)}>
          <BsArrowLeft /> Back to Test Automation
        </button>
        <h2 style={{ marginBottom: "0.5rem" }}>{article.title}</h2>
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="ta-article-read-time">{article.readTime}</span>
          {article.tags.map((tag) => (
            <span key={tag} className="skill-badge skill-badge-teal" style={{ fontSize: "0.75rem" }}>
              {tag}
            </span>
          ))}
        </div>
        <ArticleContent slug={activeArticle} />
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
                      fontFamily: "'Inter', sans-serif",
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
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {fw.description}
                </p>
                <div className="mb-3">
                  {fw.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
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

      {/* Articles */}
      <div>
        <p className="ta-section-title">Articles</p>
        <div className="row g-3">
          {ARTICLES.map((article) => (
            <div className="col-md-6 col-lg-5" key={article.slug}>
              <button
                className="ta-article-card w-100 text-start border-0"
                onClick={() => setActiveArticle(article.slug)}
              >
                <div className="d-flex justify-content-between align-items-start mb-1">
                  <h5
                    style={{
                      fontFamily: "'Inter', sans-serif",
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
