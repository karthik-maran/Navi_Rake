import React from 'react';
import '../Styles/About.css'; // Import the updated CSS file

const About = () => {
    return (
        <div className="about__container">
            <h1 className="about__title">About Us</h1>
            <p className="about__text">
                Welcome to our application! We are dedicated to providing the best services to our users. Our team consists of skilled professionals who are passionate about technology and innovation.
            </p>
            <h2 className="about__subtitle">Our Mission</h2>
            <p className="about__text">
                Our mission is to create user-friendly applications that simplify your daily tasks and enhance your productivity. We strive for excellence in everything we do.
            </p>
            <h2 className="about__subtitle">Our Values</h2>
            <ul className="about__list">
                <li className="about__list-item">Integrity</li>
                <li className="about__list-item">Innovation</li>
                <li className="about__list-item">Collaboration</li>
                <li className="about__list-item">Customer Satisfaction</li>
            </ul>
            <h2 className="about__subtitle">Meet the Team</h2>
            <div className="about__team">
                <div className="about__team-member">
                    <img className="about__team-member-image" src="/path/to/image1.jpg" alt="Team Member 1" />
                    <h3 className="about__team-member-name">John Doe</h3>
                    <p className="about__team-member-role">CEO</p>
                </div>
                <div className="about__team-member">
                    <img className="about__team-member-image" src="/path/to/image2.jpg" alt="Team Member 2" />
                    <h3 className="about__team-member-name">Jane Smith</h3>
                    <p className="about__team-member-role">CTO</p>
                </div>
                <div className="about__team-member">
                    <img className="about__team-member-image" src="/path/to/image3.jpg" alt="Team Member 3" />
                    <h3 className="about__team-member-name">Emily Johnson</h3>
                    <p className="about__team-member-role">Lead Developer</p>
                </div>
            </div>
        </div>
    );
};

export default About;
