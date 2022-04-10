import React, { useEffect } from "react";
// import Navbar from "./Navbar";
import hero from "../img/hero.png";
import "./Home.css";

import {
  Link
} from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

function Home(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`bg-${props.mode}`}
      style={{ color: props.mode === "darka" ? "white" : "black" }}
    >
      {/* <Navbar mode={txtw} /> */}
      <div className="container hero d-flex">
        <div className="left">
          <p data-aos="fade-down" className="welcome">
            Welcome
          </p>
          <h1 data-aos="fade-down" className="name">
            Hi..! I'm Ritik
          </h1>
          <h1 data-aos="fade-down" className="dev">
            <span>Frontend</span> Developer
          </h1>
          <p data-aos="fade-down" className="line">
            Focused on creating minimalistic and modern user interfaces
          </p>
          <div data-aos="fade-right" className="btns">
            <button className="btn hire px-4">Hire Me !</button>
            <Link to="/projects" className="btn btn project px-4">See My Projects</Link>
          </div>
        </div>
        <div data-aos="fade-down" className="right">
          <img className="img-fluid" src={hero} alt="" />
        </div>
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
      </div>
    </div>
  );
}

export default Home;
