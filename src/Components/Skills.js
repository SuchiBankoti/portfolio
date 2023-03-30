import React from "react";
import { skills } from "../data";
import "./Skills.css";

const Skills = () => {
  skills.map((e) => <div className="single-skill">{e}</div>);

  return (
    <div id="skills">
      <div className="skill-heading">Skills</div>
      <div className="skill-set">
        {skills.map((e, i) => (
          <div className="single-skill" key={i}>
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
