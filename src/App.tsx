import type React from "react";
import Header from "./components/Header/Header";
import styles from "./css/App.module.css";
import { useEffect } from "react";
import Sections from "./components/Sections/Sections";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      window.dispatchEvent(new CustomEvent("externalMouseMove", { detail: { offsetX: e.clientX, offsetY: e.clientY } }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Sections>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </Sections>
    </div>
  );
};

export default App;