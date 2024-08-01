import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./styles/global.css"; // Import global styles

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
        <Resume />
      </main>
    </div>
  );
}

export default App;
