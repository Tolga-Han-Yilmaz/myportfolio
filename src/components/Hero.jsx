import React from 'react'
import "../scss/components/hero.scss"

const Hero = () => {
  return (
    <section className='hero'>
      <div>
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2 className='hero-heading'>Tolga Han Yilmaz</h2>
      </div>
      <div>
        <h3 className="hero-heading">I’m interested in Web Development.</h3>
      </div>
      <div>
        <p>
        I’m currently improving my React, JavaScript, Python, HTML, CSS, Bootstrap, Material UI skills.        </p>
        <p>
        Currently, I am working as a front end developer at <a href="https://www.mazakayazilim.com/">Mazaka Software.</a> 
        </p>
      </div>
      
    </section>
  )
}

export default Hero
