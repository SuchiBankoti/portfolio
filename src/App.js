import React, { useRef } from "react";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import "./App.css";

const App = () => {
  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const myBg = useRef(null);
  function converge() {
    sec1.current.style.clipPath = `polygon(50% 0, 40% 50%, 50% 100%, 0 109%, 0% 50%, 0 0)`;
    sec2.current.style.clipPath = `polygon(100% 0%, 100% 50%, 100% 100%, 50% 100%, 60% 50%, 50% 0)`;
  }
  function diverge() {
    sec1.current.style.clipPath = `polygon(0% 0%, 0 0, 0 0%, 0 100%)`;
    sec2.current.style.clipPath = `polygon(0% 0, 0% 0%, 0% 0%, 100% 0%)`;
  }

  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if (value < 2000) {
      myBg.current.style.opacity = `${(1000 - value) / 1000}`;
    } else {
      myBg.current.style.opacity = `${(value - 2000) / 1000}`;
    }
  });

  return (
    <div className="container">
      <div className="background" ref={myBg}>
        <div className="sec1" ref={sec1}></div>
        <div className="sec2" ref={sec2}></div>
      </div>
      <div className="main-page">
        <Navbar />
        <Profile diverge={diverge} converge={converge} />
        <About />
        <Projects />
        <Skills />
      </div>
    </div>
  );
};
export default App;
