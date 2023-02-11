import React from "react";
import "../scss/components/jobs.scss";

const Jobs = () => {
  return (
    <section id="jobs" className="jobs">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className="jobs-inner d-flex">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Mazaka
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Upwork
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Msb
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <h3>
              <span>Frontend Developer</span>
              <span className="company">
                {" "}
                @
                <a href="https://www.mazakayazilim.com/" target="_blank">
                  Mazaka Software
                </a>
              </span>
            </h3>
            <p>Sep 2022 - Present</p>
            <div>
              <ul>
                <li>I created E-Commerce sites from scratch.</li>
                <li>I revised e-commerce sites.</li>
                <li>
                  Developed interactive, responsive and scalable frontend using
                  HTML5, CSS3, JavaScript ES6, React, Git@Github
                </li>
                <li>
                  Communicate with multi-disciplinary teams of engineers,
                  designers, producers, and clients on a daily basis
                </li>
              </ul>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <h3>
              <span>Frontend Developer</span>
              <span className="company">
                {" "}
                @
                <a href="https://www.upwork.com/" target="_blank">
                  Upwork
                </a>
              </span>
            </h3>
            <p>Jan 2022 - Sep 2022</p>
            <div>
              <ul>
                <li>I did various projects.</li>
                <li>I made code edits</li>
              </ul>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <h3>
              <span>System Engineer</span>
              <span className="company">
                {" "}
                @
                <a href="/" target="_blank">
                  Msb
                </a>
              </span>
            </h3>
            <p>Aug 2014 - Jan 2022</p>
            <div>
              <ul>
                <li>İdentify and solve problems,</li>
                <li>Make tactical and strategic decisions at all levels,</li>
                <li>
                  Installing new software, operating systems and equipment,
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
