import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <h3>This site is made by Kyoung Mo Koo</h3>
      <span>
        “Imagination is more important than knowledge.”
      </span>
      <span>− Albert Einstein</span>
    </div>
  );
}

export default About;

