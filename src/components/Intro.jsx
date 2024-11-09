import React from "react";

import '../Style/program.css'
import '../Style/styles.css'
const Intro = () => {
  return (
    <>
    
    <header className="section__container header__container">
      <div className="header__content">
        <h4>OUR FITNESS PROGRAMS</h4>
        <h1>
          <span>TRANSFORM</span> YOUR LIFE
        </h1>
        <p>
          Explore our diverse range of programs tailored to meet all fitness levels,
          helping you achieve your goals with expert guidance and support.
        </p>
        <a href="register.html">
          <button className="btn">Get Started</button>
        </a>
      </div>
      <div className="header__image">
        <img src="images/header.png" alt="Fitness Programs" />
      </div>
    </header>
    </>
  );
};

export default Intro;
