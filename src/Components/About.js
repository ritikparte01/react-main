import aboutimg from "../img/about.png";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About(props) {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 400 });
  }, []);

  return (
    <div>
      <div className="container About" id="about">
        <div data-aos="fade-down" className="left2">
          {/* <img className='img-fluid' src={aboutimg} alt="" /> */}
        </div>

        <div className="right2">
          <h1 data-aos="fade-down">
            About <span>Me</span>
          </h1>
          <p  data-aos="fade-down" className={`text-${props.txtw}`}>
            I Am Ritik Frontend Web Developer Based In Mumbai, Dedicated To
            Professional Services. Quality Web Design And Development, And
            Trustworthy Result. I Am Focused On Creating Highly Functional User
            Interfaces With A Perfect Mixture Of Simplicity, And Innovation For
            Each Of My Clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
