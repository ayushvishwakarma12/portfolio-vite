import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import ProjectCard from "./components/projectCard/ProjectCard";
import Skills from "./components/skills/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Experience />

      <section>Parallax</section>
      <section>Services</section>
      <section>Parallex</section>
      <section>Portfolio</section>
      <section>Contact</section>
      <h1 className="text-sky-500 bg-slate-200">Hello World!</h1>
    </div>
  );
}

export default App;
