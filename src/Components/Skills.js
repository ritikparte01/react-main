import React from 'react'
import skillsimg from '../img/skills.png'


function Skills() {
  return (
    <div className='Skills d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center" >
            <div className="left3">
                <h1>S<span>kills</span></h1>
            </div>

            <div className="right3">
                    <img src={skillsimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Skills