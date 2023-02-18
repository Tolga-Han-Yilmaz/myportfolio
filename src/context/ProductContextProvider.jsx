import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import projects from "../data/data-projects";

//? 1- Defining
export const ProductContext = createContext();

//? 3-Consume function (Custom Hook)
export const useProductContext = () => {
  return useContext(ProductContext);
};

//? 2- Provider Component
const ProductContextProvider = ({ children }) => {
  const [projectsItems, setProjectsItems] = useState(projects);

  const allCategories = projects.map((item) => {
    return item.title;
  });
 
  const values = {
    projectsItems
    
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
