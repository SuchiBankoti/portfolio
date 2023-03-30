import React, { useRef } from "react";
import "./Projects.css";
import { projects } from "../data";
import { FaGithub } from "react-icons/fa";
import SingleProject from "./SingleProject";

const Projects = () => {
  const mySlider = useRef(null);

  function prev() {
    mySlider.current.scrollLeft -=
      mySlider.current.getBoundingClientRect().width;
  }
  function next() {
    mySlider.current.scrollLeft +=
      mySlider.current.getBoundingClientRect().width;
  }
  return (
    <div id="projects">
      <div className="project-bar">
        <div className="project-heading">Projects</div>
        <div className="gitlink">
          <a
            href={`https://github.com/SuchiBankoti`}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div id="projects-container">
        <button onClick={prev} className="prev-btn">
          {"<"}
        </button>
        <div className="project-slider" ref={mySlider}>
          {projects.map((project, i) => (
            <SingleProject key={i} project={project} />
          ))}
        </div>
        <button onClick={next} className="next-btn">
          {">"}
        </button>
      </div>
    </div>
  );
};
export default Projects;
