import React from "react";
import "../scss/components/projects.scss";
import { useProductContext } from "../context/ProductContextProvider";
import external from "../assets/external.png";
import github from "../assets/github.png";

const Projects = () => {
  const { projectsItems } = useProductContext();
  console.log(projectsItems);

  return (
    <section id="projects" className="projects">
      <h2 className="numbered-heading">Some Things I've Built</h2>
      <ul className="projects-box">
        {projectsItems?.map((project) => {
          const { id, img, title, description, repoLink, appLink, tools } =
            project;
          return (
            <li className="projects-box--item d-flex" key={id}>
              <div className="projects-box--item__content col-md-5 col-12">
                <span className="featured-project">Featured Projects</span>
                <h3 className="project-title">
                  <a href={repoLink} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </h3>
                <div className="project-description">
                  <p>{description}</p>
                </div>
                <ul className="project-tech-list">
                  {tools?.map((tool) => {
                    return (
                      <>
                        <li>{tool.tool1}</li>
                        <li>{tool.tool2}</li>
                        <li>{tool.tool3}</li>
                      </>
                    );
                  })}
                </ul>
                <div className="projects-links">
                  <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    <img src={external} alt={title} />
                  </a>
                  <a href={appLink} target="_blank" rel="noopener noreferrer">
                    <img src={github} alt={title} />{" "}
                  </a>
                </div>
              </div>
              <div className="projects-box--item__img col-md-7 col-12">
                <a href={appLink} target="_blank" rel="noopener noreferrer">
                  <img src={img} alt={title} />
                </a>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="other-projects">
        <h2>Other Noteworthy Projects</h2>
        <a href="/archive" className="archive-link">
          view the archive
        </a>
        <ul className="projects-grid">
          <li className="other-projects-item">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-folder"
                    >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </h3>
                <div className="project-description">
                  <p></p>
                </div>
              </header>

              <footer>
                <ul className="project-tech-list">
                  <li></li>
                </ul>
              </footer>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
