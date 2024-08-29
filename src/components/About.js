import React from "react";
import photo from "../assets/images/photo.jpg"; // Add your photo in the assets/images folder
import "./About.css"; // Create a CSS file for styling this component

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-container">
        <div className="about-photo-container">
          <img src={photo} alt="My Photo" className="about-photo" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I'm Connie, a passionate web developer and software engineer
            with a love for creating dynamic and user-friendly applications. I
            specialize in front-end development with React and Angular, and have
            strong experience in Python and C++.
          </p>
          <p className="about-text">
            In Python, I've developed various projects including data analysis
            tools and automation scripts. My C++ projects include systems-level
            programming and performance-critical applications. My recent work
            involves building a responsive portfolio and contributing to an
            open-source machine learning library...
          </p>
          <p className="about-call-to-action">
            Want to learn more? <a href="#projects">Check out my work</a> or{" "}
            <a href="#contact">get in touch</a>!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
