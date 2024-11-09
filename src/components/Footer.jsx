import React from "react";
import '../Style/program.css'
import '../Style/styles.css'
const Footer = () => {
  return (
    <footer className="section__container footer__container">
      <div className="footer__col">
        <div className="footer__logo">
          <img src="images/logo.png" alt="FitClub Logo" />
        </div>
        <p>
          Join us today and start your fitness journey with the support of our
          community.
        </p>
        <div className="footer__socials">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="images/face.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="images/insta.png" alt="Instagram" />
          </a>
          <a href="https://x.com/?lang=en" target="_blank" rel="noreferrer">
            <img src="images/tweet.png" alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="footer__col">
        <h4>Programs</h4>
        <a href="#">Strength Training</a>
        <a href="#">Yoga & Flexibility</a>
        <a href="#">Weight Loss</a>
      </div>
      <div className="footer__col">
        <h4>About</h4>
        <a href="#">Our Story</a>
        <a href="#">Mission</a>
        <a href="#">Careers</a>
      </div>
      <div className="footer__col">
        <h4>Contact</h4>
        <a href="#">Support</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
      <div className="footer__bar">
        Copyright © 2024 FitClub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
