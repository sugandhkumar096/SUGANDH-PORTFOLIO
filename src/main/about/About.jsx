import React, { useEffect } from 'react';
import './About.css'
import img1 from "../image/myimg.jpg"


const AboutPage = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach((bar) => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Sacramento&display=swap');

        .about-container,
        .about-main,
        .about-content,
        .skills-container,
        .skill-card {
          position: static !important;
        }

        .about-container {
          max-width: 110%;
          margin: 3rem auto 5rem auto;
          font-family: 'Poppins', sans-serif;
          padding: 0 1em;
          color: #3a3838ff;
          background: rgba(181, 204, 223, 1);
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(137, 123, 123, 0.05);
        }

        @keyframes fadeInSlideUp {
          0% {opacity: 0; transform: translateY(30px);}
          100% {opacity: 1; transform: translateY(0);}
        }

        .about-header {
          text-align: center;
          color: #7f4e37;
          font-weight: 600;
          font-size: 2rem;
          margin-bottom: 0.1rem;
          letter-spacing: 0.02em;
          
        }

        .about-header::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background: #d98358;
          margin: 0.3rem auto 1.5rem auto;
          border-radius: 10px;
          animation: underlineGrow 0.8s ease forwards;
        }

        @keyframes underlineGrow {
          from {width: 0;}
          to {width: 80px;}
        }

        .about-subheading {
          text-align: center;
          font-size: 1rem;
          max-width: 480px;
          margin: 0 auto 3rem auto;
          color: #666666;
          line-height: 1.4rem;
          font-weight: 400;
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
          transform: translateX(-40px);
          opacity: 0;
          animation: slideInFromLeft 0.8s ease forwards;
        }

        @keyframes slideInFromLeft {
          to {
             transform: translateX(0);
            opacity: 1;
          }
        }

        .about-img img {
          display: block;
          width: 100%;
          height: 550px;
          object-fit: cover;
          border-radius: 16px;
        }

        .about-content {
          flex: 1 1 540px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #1c2331;
        }

        .about-tagline {
          font-size: 0.85rem;
          font-weight: 600;
          color: #d98358;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .about-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.9rem;
          color: #0e1a33;
          line-height: 1.2;
        }

        .about-description {
          font-size: 0.95rem;
          line-height: 1.4rem;
          color: #495057;
          margin-bottom: 1rem;
        }

        .about-highlight {
          font-size: 0.88rem;
          font-weight: 600;
          color: #222222;
          margin-bottom: 1.8rem;
        }

        .about-info-card {
          background: #fff;
          border-radius: 14px;
          padding: 1.5rem 1.75rem;
          box-shadow: 0 6px 18px rgba(0,0,0,0.05);
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem 0.8rem;
          font-size: 0.5rem;
          max-width:95%;
          max-height:80%;
          color: #444444;
          margin-bottom: 2rem;
          
        }

        .about-info-label {
          font-weight: 700;
          color: #253858;
        }

        .about-info-value {
          font-weight: 600;
          color: #212121;
        }

        .signature-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .signature-text {
          font-family: 'Sacramento', cursive;
          font-size: 1.9rem;
          color: #665240;
          user-select: none;
          animation: fadeIn 1.6s ease forwards;
        }

        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }

        .signature-info {
          display: flex;
          flex-direction: column;
        }

        .signature-name {
          font-weight: 700;
          font-size: 1.15rem;
          color: #374151;
          letter-spacing: 0.02em;
        }

        .signature-subtext {
          font-size: 0.85rem;
          color: #929292;
          font-style: italic;
          margin-top: 0.1rem;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1.25rem;
        }

        .skill-card {
          background: #fff;
          flex: 1 1 200px;
          border-radius: 12px;
          padding: 1.3rem 1.5rem;
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
          transition: box-shadow 0.3s ease;
          cursor: default;
          margin-bottom:20px;
        }

        .skill-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
        }

        .skill-name {
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.3rem;
          color: #111827;
          user-select: none;
        }

        .skill-description {
          font-size: 0.85rem;
          color: #666666;
          margin-bottom: 0.8rem;
          min-height: 38px;
          user-select: text;
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
          transition: width 1.4s ease;
        }

        @media (max-width: 768px) {
          .about-main {
            flex-direction: column;
            gap: 2.5rem;
          }

          .about-img, .about-content {
            max-width: 100%;
            flex-basis: 100%;
          }

          .skills-container {
            justify-content: center;
          }

          .skill-card {
            flex-basis: 100%;
            max-width: 320px;
          }
        }
      `}</style>

      <section className="about-container" aria-label="About Me Section">
        <h1 className="about-header">About</h1>
        <p className="about-subheading" tabIndex="0">
          Hi, I’m Sugandh Kumar — a curious mind and a creative coder who turns ideas into visually stunning and functional websites
        </p>

        <div className="about-main">
          <div className="about-img" aria-label="Photo of Eliot Johnson looking away, wearing glasses, black turtleneck and camel blazer, urban background blurred">
            <img
              src={img1}
              alt=""
            />
          </div>

          <div className="about-content">
            <div className="about-tagline" aria-label="Occupation title and role tag">About Me</div>
            <h2 className="about-title" tabIndex="0"> Web Developer</h2>
            <p className="about-description" tabIndex="0">
              I’m a passionate and detail-oriented Web Developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Laravel. I enjoy transforming ideas into interactive, user-friendly, and responsive web applications.
            </p>
            <p className="about-highlight" tabIndex="0"><strong></strong></p>

            <div className="about-info-card" aria-label="Personal information table">
              <div>
                <div className="about-info-label">Name</div>
                <div className="about-info-value">Sugandh Kumar</div>
              </div>
              <div>
                <div className="about-info-label">Phone</div>
                <div className="about-info-value">+91969-XXXX-XXX</div>
              </div>
              <div>
                <div className="about-info-label">Age</div>
                <div className="about-info-value">21 Years</div>
              </div>
              <div>
                <div className="about-info-label">Email</div>
                <div className="about-info-value">Sugandhkumarkvs095@gmail.com</div>
              </div>
              <div>
                <div className="about-info-label">Occupation</div>
                <div className="about-info-value">Software Engineer</div>
              </div>
              <div>
                <div className="about-info-label">Nationality</div>
                <div className="about-info-value">Indian</div>
              </div>
            </div>

            {/* <div className="signature-section" aria-label="Signature and name">
              <span className="signature-text" aria-hidden="true">Eliot Johnson</span>
              <div className="signature-info">
                <span className="signature-name" tabIndex="0">Eliot Johnson</span>
                <span className="signature-subtext" tabIndex="0">Adipiscing Elit, Lorem Ipsum</span>
              </div>
            </div> */}
          </div>
        </div>

        <section className="skills-container" aria-label="Skills and proficiency levels">
          <article className="skill-card" tabIndex="0" aria-describedby="html-desc">
            <h3 className="skill-name">HTML</h3>
            <p id="html-desc" className="skill-description">
              The backbone of my creations, structuring content with semantic precision.
            </p>
            <div className="skill-bar" aria-label="HTML skill proficiency">
              <div className="skill-bar-fill" data-width="90%"></div>
            </div>
          </article>

          <article className="skill-card" tabIndex="0" aria-describedby="css-desc">
            <h3 className="skill-name">CSS</h3>
            <p id="css-desc" className="skill-description">
              Breathing life into designs with colors, layouts, and animations.
            </p>
            <div className="skill-bar" aria-label="CSS skill proficiency">
              <div className="skill-bar-fill" data-width="90%"><p>90%</p></div>
              
            </div>
          </article>

          <article className="skill-card" tabIndex="0" aria-describedby="js-desc">
            <h3 className="skill-name">JavaScript</h3>
            <p id="js-desc" className="skill-description">
             Adding interactivity, logic, and smooth user experiences.
            </p>
            <div className="skill-bar" aria-label="JavaScript skill proficiency">
              <div className="skill-bar-fill" data-width="80%"></div>
            </div>
          </article>

          <article className="skill-card" tabIndex="0" aria-describedby="photoshop-desc">
            <h3 className="skill-name">React.js</h3>
            <p id="photoshop-desc" className="skill-description">
              Building dynamic, fast, and scalable user interfaces with reusable components.
            </p>
            <div className="skill-bar" aria-label="Photoshop skill proficiency">
              <div className="skill-bar-fill" data-width="65%" ></div>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default AboutPage;

