import React from "react";
import "./About.css";
export default function About() {
  return (
    <div id="about">
      <div className="about-me">
        <div className="about-name">
          <div className="greeting">HELLO I AM SUCHI</div>
          <div className="add-on-name">Suchi Bankoti</div>
        </div>
        <div className="about-des">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          I USE MY PASSION AND SKILLS TO CREATE DIGITAL PRODUCTS AND
          EXPERIENCES. NATIONAL AND INTERNATIONAL CUSTOMERS RELY ON ME FOR
          DESIGN, IMPLEMENTATION, AND MANAGEMENT OF THEIR DIGITAL PRODUCTS. AS
          AN INDEPENDENT, I WORK ALSO WITH WEB AGENCIES, COMPANIES, STARTUPS AND
          INDIVIDUALS TO CREATE A BLUEPRINT FOR THE DIGITAL BUSINESS. ADVISOR
          AND PARTNER OF SOME DIGITAL AND FINTECH STARTUPS. ALSO, JUDGE AT CSSDA
          AND THE WEBBY.
        </div>
      </div>
      <div className="box">
        <div className="medusa-container">
          <img
            className="medusa"
            src={process.env.PUBLIC_URL + "/logo/m.png"}
            alt="medusa"
          ></img>
        </div>
        <img
          className="arrow"
          src={process.env.PUBLIC_URL + "/logo/arr.png"}
          alt="arrow"
        ></img>
      </div>
    </div>
  );
}
