import React from "react";
import Header from "./Header";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

function App() {
  return (
    <div className="resume">
      <Header />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
