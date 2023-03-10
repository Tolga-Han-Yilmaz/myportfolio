import React from "react";
import "../scss/components/header.scss";
import me from "../assets/tolgahanyilmaz.png";
import { useProductContext } from "../context/ProductContextProvider";


const Header = () => {
 
  const { handleAside,aside } = useProductContext();

  
  return (
    <header className="header w-100">
      <nav className="nav w-100 d-flex justify-content-between">
        <div className="header-left">
          <a href="/">
            <img src={me} alt="logo" />
          </a>
        </div>
        <div className="header-right d-none d-md-flex">
          <ul className="d-flex gap-4">
            <li>
              <a href="/#about" className="d-flex">
                01.
                <p>About</p>
              </a>
            </li>
            <li>
              <a href="/#jobs" className="d-flex">
                02.
                <p>Experience</p>
              </a>
            </li>
            <li>
              <a href="/#projects" className="d-flex">
                03.
                <p>Work</p>
              </a>
            </li>
            <li>
              <a href="/#contact" className="d-flex">
                04.
                <p>Contact</p>
              </a>
            </li>
          </ul>
          <div>
            <a href="/images/Resume.docx" className="resume-button" download>
              Resume
            </a>
          </div>
        </div>
        <div className={`${aside === true ? "mobile-menu d-md-none" : "mobile-menu d-md-none active"}`} >
          <button className="mobile-menu-button" onClick={handleAside}>
            <div className="ham-box">
              <div className="ham-box-inner"></div>
            </div>
          </button>
          <aside className="mobile-menu-sidebar">
            <nav>
              <ol>
                <li>
                  <a href="/#about" className="d-flex">
                    01.
                    <p>About</p>
                  </a>
                </li>
                <li>
                  <a href="/#jobs" className="d-flex">
                    02.
                    <p>Experience</p>
                  </a>
                </li>
                <li>
                  <a href="/#projects" className="d-flex">
                    03.
                    <p>Work</p>
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="d-flex">
                    04.
                    <p>Contact</p>
                  </a>
                </li>
              </ol>
              <a href="/images/Resume.docx" className="resume-button" download>
                Resume
              </a>
            </nav>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Header;
