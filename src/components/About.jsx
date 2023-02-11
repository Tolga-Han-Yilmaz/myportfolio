import React from "react";
import "../scss/components/about.scss";
import me from "../assets/tolgahanyilmaz.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="about-inner">
        <div className="about-inner--text">
          <div>
            <p>
              +3 years experienced in IT and an expert frontend developer,
              interested in writing codes, skilled at developing complex
              solutions, creating responsive designs, possessing strong creative
              thinking skills, high energy and integrity. Ability to create
              algorithms effectively, and interact positively and communicate
              appropriately with team members. Quickly grasp new technologies
              and concepts to develop innovative and creative solutions to
              problems. Always eager to learn various technologies, tools and
              libraries. Especially interested in the Front end/Web Development,
              HTML, CSS, JS, React. Excited to learn new things and improve,
              lifetime student.
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript (ES6+)</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className="about-inner--img">
          <div className="about-inner--img__wrapper">
            <img src={me} alt="tolga han yilmaz" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
