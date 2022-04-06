import skillsimg from "../img/skills.png";
import grp from "../img/Group156.png";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
  }, []);

  return (
    <div className="Skills" id="skills">
      <h1 data-aos="fade-down">
        S<span>kills</span>
      </h1>
      <div className="container skills-main">
        <div className="left3">
          <img src={grp} alt="" />
        </div>

        <div className="right3">
          <img src={skillsimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
