import React from "react";
// import Navbar from "./Navbar";
import hero from "../img/hero.png";
import './Home.css'

function Home(props) {

  return (
    <div className={`vh-100 bg-${props.mode}`} style={{ color: props.mode === "darka" ? "white" : "black" }}> 
      {/* <Navbar mode={txtw} /> */}
      <div className="container hero d-flex">
        <div className="left">
          <p className="welcome">Welcome</p>
          <h1 className="name">Hi..! I'm Ritik</h1>
          <h1 className="dev">
            <span>Frontend</span> Developer
          </h1>
          <p className="line">
            Focused on creating minimalistic and
            modern user interfaces
          </p>
          <div className="btns">
          <button className="btn hire px-4">Hire Me !</button>
          <button className="btn btn project px-4">See My Projects</button>
          </div>
        </div>
        <div className="right">
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
