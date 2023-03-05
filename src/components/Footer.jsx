import React from "react";
import "../scss/components/footer.scss"
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center align-items-center flex-column text-center">
      <div className="mobile-social-media d-none d-md-flex">
        <ul>
          <li>
            <a
              href="https://github.com/Tolga-Han-Yilmaz"
              aria-label="GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tolgahany%C4%B1lmaz/"
              aria-label="Linkedin"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <a
          href="https://github.com/Tolga-Han-Yilmaz/myportfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>Designed &amp; Built by Tolga Han Yilmaz</p>
          
        </a>
      </div>
    </footer>
  );
};

export default Footer;
