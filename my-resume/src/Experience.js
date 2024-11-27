import React from "react";
import './Experience.css'
const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <ul>
        <li>
          <h3> HTML5,CSS3 </h3>
          <p>June 2020 - December 2022</p>
          <ul>
            {/* <li> </li> */}
            {/* <li>Led a team of 5 engineers on a major project</li>
            <li>Implemented CI/CD pipelines</li> */}
          </ul>
        </li>
        <li>
          <h3>Junior Developer at Web Solutions</h3>
          <p>January 2023 - Present</p>
          <ul>
            <li>Developed web applications using React and Node.js Worked on the front-end with React and Redux</li>
            {/* <li>Collaborated with UX/UI designers to improve user experience</li>
            <li>Assisted in building RESTful APIs with Express.js</li> */}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
