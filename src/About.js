import React from 'react';
import './About.css'; 

const About = () => {
    return (
        <div className="container">
            <h1>About Us</h1>
            <div className="blank-text-box">This project was created by the following people during HackTj 12.0</div>
            <div className="box-container">
                <div className="box">Aditya Madan</div>
                <div className="box">Mushfiq Rahman</div>
                <div className="box">Aneesh Peri</div>
            </div>
            <div className="footer">
                <div className="blank-text-box">Thank you for visiting our project!</div>
                <div className="blank-text-box">This project is licensed under the terms of the GNU General Public License 3.0.</div>
            </div>
        </div>
    );
};

export default About;