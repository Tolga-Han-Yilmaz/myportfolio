import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import "../scss/page/home.scss"
import { useProductContext } from "../context/ProductContextProvider";


const Home = () => {
  const { aside } = useProductContext();

  return <div id="content" className={`${aside === true ? "" : "blur"}`}>
    <main className="main">
    <Hero/>
    <About/>
    <Jobs/>
    <Projects/>
    <Contact/>
  </main>;
  </div>
};

export default Home;
