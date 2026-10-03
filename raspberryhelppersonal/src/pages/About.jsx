import React from 'react'
import mainpage from '../assets/mainpage.png'


function About() {
  return (
    <div>
      <div class = "about-container">
        <div className="profile-pic-wrap">
          <img src={mainpage} width="250" alt="Main Page" />


        </div>
        <p className="about-text">
          ❖ Agnus Thomas<br/>
          ❖ Dallas, Texas<br/>
          ❖ Graduate student studying Computer Science at University of Texas at Dallas<br/>
          ❖ Specializes in Data Science, aims for Fullstack<br/>
       </p>
      </div>

      <div class = "about-container">
        <p>
          I don't aim for perfectionism, I aim for beyond. <br></br>This is a portfolio site, feel free to look around. It's still in WIP. 
        </p>
      </div>

    </div>
  )
}

export default About

