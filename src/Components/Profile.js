import React from "react";
import "./Profile.css";

const Profile = (props) => {
  const day = new Date().getDate();
  const { diverge, converge } = props;
  return (
    <div id="profile">
      <div className="profile-section-left">
        <div className="creative">creative</div>
        <h1 className="front-dev">FRONTEND DEVELOPER</h1>
      </div>
      <div className="profile-section-right">
        <h1 className="date" onMouseOver={converge} onMouseLeave={diverge}>
          <div className="day">{day}</div>
          <div className="month">mar</div>
        </h1>
        <div className="des">
          I am a developer based in haldwani blah bal bal, ilike tech ans atuff
          nlah baldj
        </div>
        <div className="contact">CONTACT ME</div>
      </div>
    </div>
  );
};
export default Profile;
