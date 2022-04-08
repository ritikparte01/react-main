import skillsimg from "../img/skills.png";
import grp from "../img/Group156.png";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills(props) {
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
          {/* <img src={grp} alt="" /> */}
          <ul>
            <li>
              <span></span>
              <div className="title"  data-aos="fade-down" >FRONTEND</div>
              <div className={`text-${props.txtw} list`}  data-aos="fade-down" ><i class="uil uil-html5-alt"></i> HTML</div>
              <div className={`text-${props.txtw} list`}  data-aos="fade-down" ><i class="uil uil-css3-simple"></i> CSS</div>
              <div className={`text-${props.txtw} list`}  data-aos="fade-down" ><i class="uil uil-java-script"></i> JAVASCRIPT</div>
              <div className={`text-${props.txtw} list`}  data-aos="fade-down" ><i class="uil uil-fire"></i> BOOTSTRAP</div>
              <div className={`text-${props.txtw} list`}  data-aos="fade-down" ><i class="uil uil-font"></i> TAILWIND CSS</div>
            </li>

            <li>
            <span></span>
              <div className="title"  data-aos="fade-down">CMS</div>
              <div className={`text-${props.txtw} list`} data-aos="fade-down" ><i class="uil uil-wordpress-simple"></i> WORDPRESS</div>
              <div className={`text-${props.txtw} list`} data-aos="fade-down" ><i class="uil uil-shopping-cart"></i> WOCOMMERCE</div>
              <div className={`text-${props.txtw} list`} data-aos="fade-down" ><i class="uil uil-shopping-bag"></i> SHOPIFY</div>
            </li>

            <li>
            <span></span>
              <div className="title" data-aos="fade-down" >DESIGN TOOL</div>
              <div className={`text-${props.txtw} list`} data-aos="fade-down" ><i class="uil uil-pagelines"></i> FIGMA</div>
              <div className={`text-${props.txtw} list`} data-aos="fade-down" ><i class="uil uil-adobe-alt"></i> ADOBE XD</div>
              <div className={`text-${props.txtw} list`} data-aos="fade-down" ><i class="uil uil-circle-layer"></i> PHOTOSHOP</div>
            </li>

            <li>
            <span></span>
              <div className="title" data-aos="fade-down" >OTHER</div>
              <div className={`text-${props.txtw} list`} data-aos="fade-down" ><i class="uil uil-github-alt"></i> GIT & GITHUB</div>
            </li>

          </ul>
        </div>

        <div className="right3">
          <img  data-aos="fade-down" src={skillsimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
