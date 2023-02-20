import React from "react";
import "../scss/components/leftnavbar.scss";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";

const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <ul>
        <li>
          <a href="https://github.com/Tolga-Han-Yilmaz">
            <Github/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tolgahany%C4%B1lmaz/">
            <Linkedin/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavbar;
