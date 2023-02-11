import React from 'react'
import "../scss/components/projects.scss"
import { useProductContext } from "../context/ProductContextProvider";


const Projects = () => {
  const { projectsItems } = useProductContext();
  console.log(projectsItems)

  return (
    <section id='projects' className='projects'>
      {
        projectsItems?.map((project)=>{
          return(
            <div>

            <img src={project.img} alt="" />
            <img src={project.img1} alt="" />
            <p>{project.title}</p>
            </div>
          )
        })
      }
    </section>
  )
}

export default Projects
