import React, { useEffect } from 'react';
import './About.css'
import img1 from "../image/myimg.jpg"

const About = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach((bar, index) => {
      const width = bar.getAttribute('data-width');
      setTimeout(() => {
        bar.style.width = width;
      }, index * 300); // staggered animation
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Sacramento&display=swap');

        .about-container {
          max-width: 1300px;
         
          margin: 3rem auto 5rem auto;
          font-family: 'Poppins', sans-serif;
          padding: 0 1em;
          color: #3a3838ff;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(137, 123, 123, 0.05);
          animation: fadeInContainer 1s ease forwards;
        }

        @keyframes fadeInContainer {
          from {opacity: 0; transform: scale(0.98);}
          to {opacity: 1; transform: scale(1);}
        }

        .about-header {
          text-align: center;
          color:#0e1a33;
          font-weight: 600;
          font-size: 2rem;
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
          animation: fadeInDown 1s ease forwards;
        }

        @keyframes fadeInDown {
          from {opacity: 0; transform: translateY(-30px);}
          to {opacity: 1; transform: translateY(0);}
        }

        .about-subheading {
          text-align: center;
          font-size: 1rem;
          max-width: 480px;
          margin: 0 auto 3rem auto;
          color: #232121f3;
          line-height: 1.4rem;
          font-weight: 400;
          animation: fadeIn 1.2s ease forwards;
        }

        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }

        .about-main {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .about-img {
           flex: 1 1 300px;
          max-width: 480px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
          animation: slideInFromLeft 1.2s ease forwards;
          opacity: 0;
        }

        @keyframes slideInFromLeft {
          from {transform: translateX(-40px); opacity: 0;}
          to {transform: translateX(0); opacity: 1;}
        }

        .about-img img {
  display: block;
  width: 100%;
  height: auto;   /* ✅ Auto height maintain karega */
  max-height: 550px; /* ✅ Limit height */
  object-fit: cover;
  border-radius: 16px;
  transition: transform 0.5s ease;
}


        .about-img img:hover {
          transform: scale(1.05);
        }

        .about-content {
          flex: 1 1 540px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #1c2331;
          animation: slideInFromRight 1.2s ease forwards;
          opacity: 0;
        }

        @keyframes slideInFromRight {
          from {transform: translateX(40px); opacity: 0;}
          to {transform: translateX(0); opacity: 1;}
        }

        .about-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #0e1a33;
          line-height: 1.2;
        }

        .about-description {
          font-size: 0.95rem;
          line-height: 1.5rem;
          color: #231818f3;
          margin-bottom: 1rem;
          animation: fadeIn 1.6s ease forwards;
        }

        .about-info-card {
          background: #fff;
          border-radius: 14px;
          padding: 1.5rem;
          box-shadow: 0 6px 18px rgba(0,0,0,0.05);
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          font-size: 0.9rem;
          color: #444444;
           margin-bottom: 2rem;
          animation: fadeInUp 1.4s ease forwards;
        }

        @keyframes fadeInUp {
          from {opacity: 0; transform: translateY(30px);}
          to {opacity: 1; transform: translateY(0);}
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1.25rem;
          animation: fadeInUp 1.6s ease forwards;
        }

        .skill-card {
          background: #fff;
          flex: 1 1 200px;
          border-radius: 12px;
          padding: 1.3rem 1.5rem;
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
        }

        .skill-bar {
          width: 100%;
          height: 6px;
          background: #f1f1f1;
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          width: 0;
          background: #d98358;
          border-radius: 4px;
          transition: width 1.5s ease;
        }

        @media (max-width: 992px) {
          .about-main {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .about-img, .about-content {
            max-width: 100%;
          }
          .about-info-card {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .about-header {
            font-size: 1.6rem;
          }
          .about-title {
            font-size: 1.4rem;
          }
          .skill-card {
            flex: 1 1 100%;
          }
        }
      `}</style>

      <section className="about-container">
        <h1 className="about-header">About</h1>
        <p className="about-subheading">
          Hi, I’m Sugandh Kumar — a curious mind and a creative coder who turns ideas into visually stunning and functional websites
        </p>

        <div className="about-main">
          <div className="about-img">
            <img src={img1} alt="Sugandh Kumar" />
          </div>

          <div className="about-content">
            <h2 className="about-title">Web Developer</h2>
            <p className="about-description">
              I’m a passionate and detail-oriented Web Developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Laravel.
            </p>

            <div className="about-info-card">
              <div><strong>Name:</strong> Sugandh Kumar</div>
              <div><strong>Phone:</strong> +91969-XXXX-XXX</div>
              <div><strong>Age:</strong> 21 Years</div>
              <div><strong>Email:</strong> Sugandhkumarkvs095@gmail.com</div>
              <div><strong>Occupation:</strong> Software Engineer</div>
              <div><strong>Nationality:</strong> Indian</div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default About;
