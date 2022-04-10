import React from 'react'
import Navbar from './Navbar'
import projectimg from '../img/projects.png'
import arcon from '../img/arcon.png'
import wstore from '../img/wstore.png'
import docker from '../img/docker.png'
import dash from '../img/Dashboard-Test.png'
import cat from '../img/catlog.png'
import api from '../img/api.png'

function Projects(props) {
  return (
    <div>
        <div className="container projects mt-3">
            <h1>Recent <span>Projects</span></h1>
            <img src={projectimg} alt="" />

            <div className="project-main">
                <div className="card1">
                    <img src={arcon} alt="" />
                    <div className="desc">
                        <h3>Arcon Structures</h3>
                        <p>Static Website for construction company</p>
                    </div>
                </div>

                <div className="card1">
                    <img src={wstore} alt="" />
                    <div className="desc">
                        <h3>WStore</h3>
                        <p>An E-Commerce Store Based On WoCommerce</p>
                    </div>
                </div>

                <div className="card1">
                    <img src={docker} alt="" />
                    <div className="desc">
                        <h3>Docker Clone</h3>
                        <p>Clone Of Docker Website</p>
                    </div>
                </div>

                <div className="card1">
                    <img src={dash} alt="" />
                    <div className="desc">
                        <h3>Dashboard</h3>
                        <p>Build Dashboard Using CSS Framework Bootstrap 5</p>
                    </div>
                </div>

                <div className="card1">
                    <img src={cat} alt="" />
                    <div className="desc">
                        <h3>Catalouge Page</h3>
                        <p>Catalouge Page For an Ecommerce Website</p>
                    </div>
                </div>

                <div className="card1">
                    <img src={api} alt="" />
                    <div className="desc">
                        <h3>Quote API</h3>
                        <p>API Based Project Using Quatable Api</p>
                    </div>
                </div>
            </div>

            {/* <button className="btn text-white back px-5 my-5">Home</button> */}
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
  )
}

export default Projects