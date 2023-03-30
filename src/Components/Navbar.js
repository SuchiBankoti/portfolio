import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="info">
        <div className="nav-name">Suchi Bankoti</div>
      </div>
      <div className="all-links">
        <a href="#profile" className="link">
          PROFILE
        </a>
        <a href="#projects-container" className="link">
          PROJECTS
        </a>
        <a href="#skills" className="link">
          SKILLS
        </a>
      </div>
    </div>
  );
};
export default Navbar;
