import React from "react";
import photo from "../assets/images/photo.jpg"; // Add your photo in the assets/images folder

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2>About Me</h2>
        <img src={photo} alt="My Photo" className="about-photo" />
        <p>
          Hi, I'm Connie, a passionate web developer with a love for creating
          dynamic and user-friendly web applications...
        </p>
      </div>
    </section>
  );
}

export default About;
