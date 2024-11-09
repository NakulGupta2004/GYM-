import React, { useEffect, useRef } from "react";
import "../Style/about.css";

const aboutData = [
  {
    img: "images/back1.jpg",
    title: "Our Mission",
    description: "At FitClub, we believe that fitness is a journey, not a destination. Our mission is to provide a supportive community and expert guidance to help you achieve your fitness goals.",
  },
  {
    img: "images/back2.jpeg",
    title: "Our Story",
    description: "FitClub was founded by a group of passionate fitness enthusiasts who wanted to create a space without the intimidation of a traditional gym.",
  },
  {
    img: "images/back3.jpg",
    title: "Our Values",
    description: "We value community, inclusivity, and results-driven training. Fitness should be accessible to everyone.",
  },
];

const teamData = [
  { img: "images/trainer-2.jpg", name: "John Doe", role: "Founder & CEO" },
  { img: "images/trainer-3.jpg", name: "Jane Smith", role: "Head Trainer" },
  { img: "images/trainer-4.jpg", name: "Bob Johnson", role: "Operations Manager" },
];

const testimonialData = [
  "FitClub has changed my life. The community is so supportive and the trainers are amazing.",
  "I was hesitant to join a gym, but FitClub has been a game-changer.",
  "FitClub is more than just a gym - it's a community. I've made lifelong friends.",
];

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section__container about__container">
      <div className="about__header">
        <h2 className="section__header">About Us</h2>
        <p className="section__subheader">Get to know our story, mission, and values</p>
      </div>
      <div className="about__grid">
        {aboutData.map((card, index) => (
          <div key={index} className="about__card">
            <div className="card__image-container">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="card__content">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TeamSection = () => {
  const teamRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

  return (
    <section ref={teamRef} className="team__section">
      <h4 className="section__header">Meet Our Team</h4>
      <div className="about__team-grid">
        {teamData.map((member, index) => (
          <div key={index} className="about__team-card">
            <div className="team-card__image-container">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="team-card__content">
              <h5>{member.name}</h5>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scale-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <div ref={testimonialRef} className="about__testimonials">
      <h4 className="section__header">What Our Members Say</h4>
      <div className="about__testimonials-grid">
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="about__testimonial-card">
            <p>{testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    const fadeInPage = () => {
      document.body.style.opacity = 0;
      let opacity = 0;
      const fadeEffect = setInterval(() => {
        if (opacity < 1) {
          opacity += 0.05;
          document.body.style.opacity = opacity;
        } else {
          clearInterval(fadeEffect);
        }
      }, 50);
    };
    fadeInPage();
  }, []);

  return (
    <>
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  );
};

export default About;