import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import "../scss/page/home.scss"

const Home = () => {
  return <div id="content">
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
