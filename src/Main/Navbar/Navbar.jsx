import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./navbar.css"


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container navbar-custom">
        <a className="navbar-brand" href="#">
          Sugandh Kumar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto navbar-links">
            <li className="nav-item"><a className="nav-link" href="" to="/">Home</a ></li>
            <li className="nav-item"><a  className="nav-link" href="" to= '/About'>About</a ></li>
            <li className="nav-item"><a className="nav-link" href="C:\Users\sugan\OneDrive\Desktop\My-portfolio\src\Main\Image\my_resume_3_0 (1) (2) (1).pdf">Resume</a></li>
            <li className="nav-item"><a  className="nav-link" href="">Portfolio</a></li>
            <li className="nav-item"><a  className="nav-link" href="">Services</a ></li>
            <li className="nav-item"><a  className="nav-link" href="">Contact</a ></li>
          </ul>
          <ul className="navbar-nav navbar-social">
            <li><a href="#"><FaXTwitter /></a></li>
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
