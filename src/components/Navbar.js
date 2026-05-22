import { useState } from "react";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Certificates from "./Certificates";
import TestAutomation from "./TestAutomation";
import Articles from "./Articles";

const tabs = [
  { id: "about", label: "About" },
  { id: "portfolio", label: "Projects" },
  { id: "testAutomation", label: "Test Automation" },
  { id: "articles", label: "Articles" },
  { id: "resume", label: "Resume" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <nav className="site-nav">
        <h1 className="site-nav-logo" onClick={() => setActiveTab("about")}>
          Olga Gavrushenko
        </h1>
        <div className="site-nav-links">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
      <main className="page-content">
        {activeTab === "about" && <AboutMe onNavigate={setActiveTab} />}
        {activeTab === "portfolio" && <Portfolio />}
        {activeTab === "testAutomation" && <TestAutomation onNavigate={setActiveTab} />}
        {activeTab === "articles" && <Articles />}
        {activeTab === "resume" && <Resume />}
        {activeTab === "certificates" && <Certificates />}
        {activeTab === "contact" && <Contact />}
      </main>
    </>
  );
};

export default Navbar;
