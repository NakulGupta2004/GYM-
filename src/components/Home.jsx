import React from "react";
import '../Style/program.css'
import '../Style/styles.css'
import Intro from './Intro'

import  { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const fadeInPage = () => {
      let body = document.body;
      body.style.opacity = 0;
      let opacity = 0;

      const fadeEffect = setInterval(() => {
        if (opacity < 1) {
          opacity += 0.05;
          body.style.opacity = opacity;
        } else {
          clearInterval(fadeEffect);
        }
      }, 50);
    };

    const fadeOutPage = (targetUrl) => {
      let body = document.body;
      let opacity = 1;

      const fadeEffect = setInterval(() => {
        if (opacity > 0) {
          opacity -= 0.05;
          body.style.opacity = opacity;
        } else {
          clearInterval(fadeEffect);
          window.location.href = targetUrl;
        }
      }, 50);
    };

    window.addEventListener('load', fadeInPage);

    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetUrl = this.href;
        fadeOutPage(targetUrl);
      });
    });
  }, []);

  return (
    <div>


      <header className="section__container header__container">
        <div className="header__content">
          <h4>BEST FITNESS IN THE TOWN</h4>
          <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
          <p>
            Unleash your potential and embark on a journey towards a stronger,
            fitter, and more confident you. Sign up for 'Make Your Body Shape' now
            and witness the incredible transformation your body is capable of!
          </p>
          <a href="register.html"><button className="btn">Get Started</button></a>
        </div>
        <div className="header__image">
          <img src="images/header.png" alt="header" />
        </div>
      </header>

      <section className="section__container explore__container">
        <div className="explore__header">
          <h2 className="section__header">EXPLORE OUR PROGRAM</h2>
        </div>
        <div className="explore__grid">
          <div className="explore__card">
            <h4>Strength :</h4>
            <p>
              Embrace the essence of strength as we delve into its various
              dimensions: physical, mental, and emotional.
            </p>
            <a href="register.html">Join Now</a>
          </div>
          <div className="explore__card">
            <h4>Physical Fitness :</h4>
            <p>
              It encompasses a range of activities that improve health, strength,
              flexibility, and overall well-being.
            </p>
            <a href="register.html">Join Now</a>
          </div>
          <div className="explore__card">
            <h4>Fat Loss :</h4>
            <p>
              Through a combination of workout routines and expert guidance, we'll
              empower you to reach your goals.
            </p>
            <a href="register.html">Join Now</a>
          </div>
          <div className="explore__card">
            <h4>Weight Gain :</h4>
            <p>
              Designed for individuals, our program offers an effective approach
              to gaining weight in a sustainable manner.
            </p>
            <a href="register.html">Join Now </a>
          </div>
        </div>
      </section>

      <section className="section__container class__container">
        <div className="class__image">
          <img src="images/class-1.jpg" alt="class" className="class__img-1" />
        </div>
        <div className="class__content">
          <h2 className="section__header">THE CLASS YOU WILL GET HERE</h2>
          <p>
            Led by our team of expert and motivational instructors, "The Class You
            Will Get Here" is a high-energy, results-driven session that combines
            a perfect blend of cardio, strength training, and functional
            exercises. Each class is carefully curated to keep you engaged and
            challenged, ensuring you never hit a plateau in your fitness
            endeavors.
          </p>
          <button className="btn">Book A Class</button>
        </div>
      </section>

      <section className="section__container join__container">
        <h2 className="section__header">WHY JOIN US ?</h2>
        <p className="section__subheader">
          Our diverse membership base creates a friendly and supportive
          atmosphere, where you can make friends and stay motivated.
        </p>
        <div className="join__image">
          <img src="images/join.jpg" alt="Join" />
          <div className="join__grid">
            <div className="join__card">
              <div className="join__card__content">
                <h4>1. Personal Trainer</h4>
                <p>Unlock your potential with our expert Personal Trainers.</p>
              </div>
            </div>
            <div className="join__card">
              <div className="join__card__content">
                <h4>2. Practice Sessions</h4>
                <p>Elevate your fitness with practice sessions. Be the best.</p>
              </div>
            </div>
            <div className="join__card">
              <div className="join__card__content">
                <h4>3. Good Management</h4>
                <p>Supportive management, for your fitness success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container price__container">
        <h2 className="section__header">OUR PRICING PLAN</h2>
        <p className="section__subheader">
          Our pricing plan comes with various membership tiers, each tailored to
          cater to different preferences and fitness aspirations.
        </p>
        <div className="price__grid">
          <div className="price__card">
            <div className="price__card__content">
              <h4>Weekly Plan</h4>
              <h3>Rs. 500</h3>
              <p>Smart workout plan</p>
              <p>At-home workouts</p>
            </div>
            <button className="btn price__btn"><a href="register.html">Join Now</a></button>
          </div>
          <div className="price__card">
            <div className="price__card__content">
              <h4>Monthly Plan</h4>
              <h3>Rs. 2000</h3>
              <p>PRO Gyms</p>
              <p>Smart workout plan</p>
              <p>At-home workouts</p>
            </div>
            <button className="btn price__btn"><a href="register.html">Join Now</a></button>
          </div>
          <div className="price__card">
            <div className="price__card__content">
              <h4>Yearly Plan</h4>
              <h3>Rs. 8500</h3>
              <p>ELITE Gyms & Classes</p>
              <p>PRO Gyms</p>
              <p>Smart workout plan</p>
              <p>At-home workouts</p>
              <p>Personal Training</p>
            </div>
            <button className="btn price__btn"><a href="register.html">Join Now</a></button>
          </div>
        </div>
      </section>



      <div className="footer__credits">
        <p>Designed and developed by Nakul Gupta</p>
      </div>
    </div>
  );
}

export default Home;

