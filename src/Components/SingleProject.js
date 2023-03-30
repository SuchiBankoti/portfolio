import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import "./SingleProject.css";

const SingleProject = (props) => {
  const { project } = props;
  const { name, io, id } = project;
  return (
    <div className="single-project">
      <div className="project-image-container">
        <img
          src={process.env.PUBLIC_URL + `/image/img${id}.png`}
          alt="project"
          className="project-image"
        ></img>
      </div>
      <div className="project-detail">
        <div className="project-name">{name}</div>
        <div className="project-date">01/03/23</div>
        <div className="project-des">
          <span>REACT </span>
          <span>JAVASCRIPT</span>
          <span>HTML </span>
          <span>CSS</span>
        </div>
        <div className="project-links">
          <a href={`${io}`} target="_blank" rel="noreferrer">
            <FaExternalLinkSquareAlt />
          </a>
        </div>
      </div>
    </div>
  );
};
export default SingleProject;
