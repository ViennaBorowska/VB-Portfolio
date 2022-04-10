import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
