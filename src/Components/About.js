import React from 'react'
import aboutimg from '../img/about.png'

function About(props) {
  return (
    <div>
        <div className="container About" id='about'>
            <div className="left2">
                <img className='img-fluid' src={aboutimg} alt="" />
            </div>

            <div className="right2">
                <h1>About <span>Me</span></h1>
                <p className={`text-${props.txtw}`}>I Am Ritik Frontend Web Developer Based In Mumbai, Dedicated To Professional Services. Quality Web Design And Development, And Trustworthy Result. I Am Focused On Creating Highly Functional User Interfaces With A Perfect Mixture Of Simplicity, And Innovation For Each Of My Clients.</p>
            </div>
        </div>
    </div>
  )
}

export default About