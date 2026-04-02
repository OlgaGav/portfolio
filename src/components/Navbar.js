import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Certificates from "./Certificates";
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("about"); // Initialize activeTab state

  // Define a function to handle the click event on a tab
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the activeTab state with the selected tab
  };

  return (
    <>
      <nav className="navbar">
        <h1 onClick={() => handleTabClick("about")}>Olga Gavrushenko</h1>
        <div className="links">
          <button
            className={activeTab === "about" ? "active" : ""}
            onClick={() => handleTabClick("about")}
          >
            About me
          </button>
          <button
            className={activeTab === "portfolio" ? "active" : ""}
            onClick={() => handleTabClick("portfolio")}
          >
            Portfolio
          </button>
          <button
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </button>
          <button
            className={activeTab === "resume" ? "active" : ""}
            onClick={() => handleTabClick("resume")}
          >
            Resume
          </button>
          <button
            className={activeTab === "certificates" ? "active" : ""}
            onClick={() => handleTabClick("certificates")}
          >
            Certificates
          </button>
        </div>
      </nav>
      {/* Render the content based on the active tab */}
      {activeTab === "about" && <AboutMe />}
      {activeTab === "portfolio" && <Portfolio />}
      {activeTab === "contact" && <Contact />}
      {activeTab === "resume" && <Resume />}
      {activeTab === "certificates" && <Certificates />}
    </>
  );
};

export default Navbar;
