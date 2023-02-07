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
        +3 years experienced  in IT and an expert frontend developer, interested in writing codes, skilled at developing complex solutions, creating responsive designs, possessing strong creative thinking skills, high energy and integrity. Ability to create algorithms effectively, and interact positively and communicate appropriately with team members. Quickly grasp new technologies and concepts to develop innovative and creative solutions to problems. Always eager to learn various technologies, tools and libraries. Especially interested in the Front end/Web Development, HTML, CSS, JS, React. Excited to learn new things and improve, lifetime student. 
        </p>
        <p>
        Currently, I am working as a front end developer at <a href="https://www.mazakayazilim.com/">Mazaka Software.</a> 
        </p>
      </div>
      
    </section>
  )
}

export default Hero
