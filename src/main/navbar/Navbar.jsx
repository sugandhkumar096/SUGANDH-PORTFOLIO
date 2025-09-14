import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Resume from "../image/my_resume_3_0 (1) (2) (1).pdf"
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container navbar-custom">
        <a className="navbar-brand" href="#">
          Sugandh Kumar
        </a>

        {/* Hamburger toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto navbar-links" id="navlink">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
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
