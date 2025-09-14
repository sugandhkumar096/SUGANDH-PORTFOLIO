// src/components/DesignCard.js
import React from 'react';
import './Services.css'; 
import img2 from "../image/code.jpg"

const Service1 = () => {
    return (
        <div className="design-card">
            <div className='row'>
                <div className='col-6'>
                    <div className="image-container" >
                <img src= {img2} alt="Web Design" />
            </div>
                </div>
                <div className='col-6'>
            <h2>Web Development</h2>
            <p>Create beautiful, intuitive user interfaces and experiences that engage users and drive conversions.</p>
            <h3>What's Included:</h3>
            <ul>
                <p>✔ User Research & Analysis</p>
                <p>✔ Wireframing & Prototyping</p>
                <p>✔ Visual Design & Branding</p>
                <p>✔ Responsive Design Systems</p>
                <p style={{color:"blue"}}>+ more features</p>
            </ul>
            <h3>Technologies Used:</h3>
            <div className="technologies" >
                <span id='txt'>HTML</span>
                <span id='txt'>CSS</span>
                <span id='txt1'>Javascript</span>
                <span id='txt'>React.js</span>
                <span id='txt'>Node.js</span>
                <span id='txt2'>Express.js</span>
                <span id='txt3'>MongoDB</span>

            </div>
            <h3>Investment</h3>
            <p>Starting from <strong>$2,500/Months</strong></p>
            <h3>Timeline</h3>
            <p>2-4 Months</p>
            <button className='Btn'> Get Started with Web Design</button>
            </div>
            </div>
            
        </div>
    );
};

export default Service1;
