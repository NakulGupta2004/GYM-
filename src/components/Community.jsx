import React, { useState, useEffect, useRef } from "react";
import "../Style/Community.css";
import data from './data.json';

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
        {data.aboutData.map((card, index) => (
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
        {data.teamData.map((member, index) => (
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
        {data.testimonialData.map((testimonial, index) => (
          <div key={index} className="about__testimonial-card">
            <p>{testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const [comments, setComments] = useState([...data.staticComments]);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });
  const reviewsRef = useRef(null);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('gymComments')) || [];
    setComments([...data.staticComments, ...storedComments]);

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

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }

    return () => {
      if (reviewsRef.current) {
        observer.unobserve(reviewsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const userComments = comments.filter(comment => !comment.isStatic);
    localStorage.setItem('gymComments', JSON.stringify(userComments));
  }, [comments]);

  const handleInputChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.comment) {
      setComments([...comments, { ...newComment, isStatic: false }]);
      setNewComment({ name: '', comment: '' });
    }
  };

  return (
    <section ref={reviewsRef} className="reviews__section">
      <h4 className="section__header">Gym Reviews</h4>
      <div className="reviews__grid">
        {data.randomReviews.map((review, index) => (
          <div key={index} className="review__card">
            <h5>{review.name}</h5>
            <p>{review.comment}</p>
            <div className="rating">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="comment__section">
        <h5>Leave a Comment</h5>
        <form onSubmit={handleSubmit} className="comment__form">
          <input
            type="text"
            name="name"
            value={newComment.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <textarea
            name="comment"
            value={newComment.comment}
            onChange={handleInputChange}
            placeholder="Your Comment"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="comments__list">
          <h5>User Comments</h5>
          {comments.map((comment, index) => (
            <div key={index} className={`user__comment ${comment.isStatic ? 'static__comment' : ''}`}>
              <h6>{comment.name}</h6>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Community = () => {
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
      {/* <AboutSection /> */}
      <TeamSection />
      <TestimonialsSection />
      <ReviewsSection />
    </>
  );
};

export default Community;