// src/components/Portfolio.js

import React from 'react';
import './project.css'
import img1 from"../image/portfolio.png"
import img2 from "../image/clone.png"
import img3 from "../image/Hotel.png"
import img4 from "../image/play.png"
import img5 from "../image/freelancer.png"
import img6 from "../image/Ecommerce.webp"


const projects = [
  {
    title: "Portfolio Websites",
    description: "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    imageUrl: img1, 
  },
  {
    title: "Zerodha Clone",
    description: "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
    imageUrl: img2,
  },
  {
    title: "Hotel Management System",
    description: "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
    imageUrl: img3,
  },
  {
    title: "Play school websites",
    description: "A play school website showcases programs, facilities, and admissions to help parents choose the right early learning environment for their child.",
    imageUrl: img4,
  },
  {
    title: "Freelancer websites",
    description: "A freelancer website is an online platform where skilled professionals showcase their work enabling flexible and remote collaboration.",
    imageUrl: img5,
  },
  {
    title: "E-commerse platform",
    description: "Worked on developing fashion e-commerce features including product collections, size & fit guides, offers, and customer-friendly services like fast delivery and easy returns.",
    imageUrl: img6,
  },
];

const Portfolio = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{color:"#7f4e37",fontSize:"32px"}}>Portfolio</h1>
      <p className='main'></p>
      <p className="text-center">
        Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.
      </p>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={project.imageUrl} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href="#" className="btn btn-primary">Case Study</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
