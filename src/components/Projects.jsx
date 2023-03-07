import React from "react";
import "../scss/components/projects.scss";
import { useProductContext } from "../context/ProductContextProvider";
import { ReactComponent as Folder } from "../assets/folder.svg";


const Projects = () => {
  const { projectsItems } = useProductContext();

  return (
    <section id="projects" className="projects">
      <h2 className="numbered-heading">Some Things I've Built</h2>
      {/* <ul className="projects-box">
        {projectsItems?.map((project) => {
          const { id, img, title, description, repoLink, appLink, tools,repoSvg,appSvg} =
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
                  {tools?.map((item) => {
                    return (
                        <li>{item.tool}</li>
                        
                      
                    );
                  })}
                </ul>
                <div className="projects-links">
                  <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    {repoSvg}
                  </a>
                  <a href={appLink} target="_blank" rel="noopener noreferrer">
                    {appSvg}
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
      </ul> */}

{/* OTHER PROJECTS */}
      <div className="other-projects mb-4">
        {/* <h2>Other Noteworthy Projects</h2> */}
        <a href="/archive" className="archive-link d-none">
          view the archive
        </a>
        <ul className="projects-grid">
        {projectsItems?.map((project) => {
          const { id,  title, description,  tools,repoSvg,appSvg} =
            project;
          return (
          <li className="other-projects-item" key={id}>
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <Folder/>
                  </div>
                  <div className="project-links">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repoSvg}
                    </a>
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {appSvg}
                    </a>

                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{title}</a>
                </h3>
                <div className="project-description">
                  <p>{description}</p>
                </div>
              </header>

              <footer>
                <ul className="project-tech-list">
                  {
                    tools.map((item)=>{
                      return(
                        <li>{item.tool}</li>

                      )
                    })
                  }
                </ul>
              </footer>
            </div>
          </li>
          );
        })}
        </ul>
      </div>
      <div className="show-more text-center">

      <a href="https://github.com/Tolga-Han-Yilmaz" rel="noopener noreferrer" target="_blank">Show More</a>
      </div>
    </section>
  );
};

export default Projects;
