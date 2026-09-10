import React from 'react'

function About() {
  return (
    <div>
      <div class = "about-container">
        <p style={{width: '250px', height: '250px', margin: '50px'}}>
          <img src="https://i.pinimg.com/736x/1f/9f/68/1f9f68a53a9e39df3ee4067c823efd6b.jpg" width="250px"></img>
        </p>
        <p style={{width: '250px', height: '250px', margin:'50px', alignItems:'center'}}> 
          ❖ Agnus Thomas<br/>
          ❖ Dallas, Texas<br/>
          ❖ Graduate student studying Computer Science at University of Texas at Dallas<br/>
          ❖ Specializes in Data Science, aims for Fullstack<br/>
       </p>
      </div>

      <div class = "about-container">
        <p>
          This site is mostly just a portfolio of my stuff, feel free to take a look around. This site is a WIP so there is nothing. It also looks basic because I haven't taken the time to like make it cooler idk
        </p>
      </div>

    </div>
  )
}

export default About

