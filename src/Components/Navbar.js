import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Navbar(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-${props.mode}`}
        style={{ color: props.mode === "darka" ? "white" : "black" }}
      >
        <div className="container">
          <a data-aos="zoom-in-down" className="navbar-brand" href="#">
            <h2>
              <span>R</span>ITIK
            </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul data-aos="fade-down" className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className={`nav-link active text-${props.txtw}`}
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.txtw}`} href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.txtw}`} href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.txtw}`}>Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
