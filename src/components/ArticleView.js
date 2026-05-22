import { BsArrowLeft } from "react-icons/bs";

const articleContentMap = {
  "playwright-pom": (
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
  ),
};

const ArticleView = ({ article, onBack, backLabel = "Back" }) => (
  <>
    <button className="article-back-btn" onClick={onBack}>
      <BsArrowLeft /> {backLabel}
    </button>
    <h2 style={{ marginBottom: "0.5rem" }}>{article.title}</h2>
    <div className="d-flex align-items-center gap-3 mb-4 flex-wrap">
      <span className="ta-article-read-time">{article.readTime}</span>
      {article.publishedDate && (
        <span className="ta-article-read-time">
          {new Date(article.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      )}
      {article.tags.map((tag) => (
        <span key={tag} className="skill-badge skill-badge-teal" style={{ fontSize: "0.75rem" }}>
          {tag}
        </span>
      ))}
    </div>
    {articleContentMap[article.slug] ?? (
      <p style={{ color: "var(--brand-warm-gray)" }}>Content coming soon.</p>
    )}
  </>
);

export default ArticleView;
