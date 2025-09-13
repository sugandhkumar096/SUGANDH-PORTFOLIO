import React from "react";
import img from "../Image/profile-1.webp";
import { FaDownload } from "react-icons/fa";
import './Header.css'

const Header = () => {
  return (
    <div className="container header-container">
        <br />
        <br />
        <br />
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 text-section">
          <div className="hero"></div>
          <h1>Hey!, I'm Sugandh</h1>
          
          <p>
            Transforming ideas into elegant solutions through creative design
            and innovative development
          </p>

          <div className="stats">
            <div>
              <h2>8+</h2>
              <p>Months Experience</p>
            </div>
            <div>
              <h2>12+</h2>
              <p>Projects Completed</p>
            </div>
            <div>
              <h2>10+</h2>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="buttons">
            <button className="view-work">View My Work</button>
            <a href="src\Main\Image\my_resume_3_0 (1) (2) (1).pdf" className="connect"><span style={{marginLeft:"20px"}}><FaDownload />Download CV</span></a>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 image-section">
          <img src={img} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
