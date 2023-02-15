import React from "react";
import "../scss/components/projects.scss";
import { useProductContext } from "../context/ProductContextProvider";
import external from "../assets/external.png";
import github from "../assets/github.png";

const Projects = () => {
  const { projectsItems } = useProductContext();

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
                <div className="project-desription">
                  <p>{description}</p>
                </div>
                {tools?.map((tool) => {
                  return (
                    <ul className="project-tech-list">
                      <li>{tool.tool1}</li>
                      <li>{tool.tool2}</li>
                      <li>{tool.tool3}</li>
                    </ul>
                  );
                })}
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
    </section>
  );
};

export default Projects;
