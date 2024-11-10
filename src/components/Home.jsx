import React, { useState, useEffect } from "react";
import '../Style/program.css'
import '../Style/styles.css'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [showToast, setShowToast] = useState(false);

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

    const revealSections = () => {
      const sections = document.querySelectorAll('.section__container');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('reveal');
        }
      });
    };

    window.addEventListener('scroll', revealSections);
    revealSections();

    return () => {
      window.removeEventListener('scroll', revealSections);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: '', email: '', phone: '' });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <header className="section__container header__container">
        <div className="header__content">
          <h4 className="animate-slide-up">BEST FITNESS IN THE TOWN</h4>
          <h1 className="animate-slide-up"><span>MAKE</span> YOUR BODY SHAPE</h1>
          <p className="animate-slide-up">
            Unleash your potential and embark on a journey towards a stronger,
            fitter, and more confident you. Sign up for 'Make Your Body Shape' now
            and witness the incredible transformation your body is capable of!
          </p>
          <button className="btn animate-slide-up" onClick={openModal}>Get Started</button>
        </div>
        <div className="header__image animate-fade-in">
          <img src="images/header.png" alt="header" />
        </div>
      </header>

      <section className="section__container explore__container">
        <div className="explore__header">
          <h2 className="section__header">EXPLORE OUR PROGRAM</h2>
        </div>
        <div className="explore__grid">
          {['Strength', 'Physical Fitness', 'Fat Loss', 'Weight Gain'].map((title, index) => (
            <div key={index} className="explore__card animate-pop-in" style={{animationDelay: `${index * 0.1}s`}}>
              <h4>{title} :</h4>
              <p>
                Our {title.toLowerCase()} program is designed to help you achieve your fitness goals effectively and safely.
              </p>
              <button onClick={openModal} className="btn">Join Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section__container class__container">
        <div className="class__image animate-slide-in-left">
          <img src="images/class-1.jpg" alt="class" className="class__img-1" />
        </div>
        <div className="class__content animate-slide-in-right">
          <h2 className="section__header">THE CLASS YOU WILL GET HERE</h2>
          <p>
            Led by our team of expert and motivational instructors, "The Class You
            Will Get Here" is a high-energy, results-driven session that combines
            a perfect blend of cardio, strength training, and functional exercises.
          </p>
          <button onClick={openModal} className="btn">Book A Class</button>
        </div>
      </section>

      <section className="section__container join__container">
        <h2 className="section__header">WHY JOIN US ?</h2>
        <p className="section__subheader">
          Our diverse membership base creates a friendly and supportive
          atmosphere, where you can make friends and stay motivated.
        </p>
        <div className="join__image animate-scale-in">
          <img src="images/join.jpg" alt="Join" />
          <div className="join__grid">
            {[
              { title: "1. Personal Trainer", desc: "Unlock your potential with our expert Personal Trainers." },
              { title: "2. Practice Sessions", desc: "Elevate your fitness with practice sessions. Be the best." },
              { title: "3. Good Management", desc: "Supportive management, for your fitness success." }
            ].map((item, index) => (
              <div key={index} className="join__card animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="join__card__content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
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
          {[
            { title: "Weekly Plan", price: "Rs. 500", features: ["Smart workout plan", "At-home workouts"] },
            { title: "Monthly Plan", price: "Rs. 2000", features: ["PRO Gyms", "Smart workout plan", "At-home workouts"] },
            { title: "Yearly Plan", price: "Rs. 8500", features: ["ELITE Gyms & Classes", "PRO Gyms", "Smart workout plan", "At-home workouts", "Personal Training"] }
          ].map((plan, index) => (
            <div key={index} className="price__card animate-flip" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="price__card__content">
                <h4>{plan.title}</h4>
                <h3>{plan.price}</h3>
                {plan.features.map((feature, i) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>
              <button onClick={openModal} className="btn price__btn">Join Now</button>
            </div>
          ))}
        </div>
      </section>



      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Join Our Fitness Program</h2>
            <p>Fill in your details and we'll contact you soon with more information.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showToast && (
        <div className="toast">
          Form Submitted! Our team will contact you soon.
        </div>
      )}
    </div>
  );
}