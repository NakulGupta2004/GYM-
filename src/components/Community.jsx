import React, { useState, useEffect, useRef } from "react";
import "../Style/Community.css";

const aboutData = [
  {
    img: "/placeholder.svg?height=200&width=300",
    title: "Our Mission",
    description: "At FitClub, we believe that fitness is a journey, not a destination. Our mission is to provide a supportive community and expert guidance to help you achieve your fitness goals.",
  },
  {
    img: "/placeholder.svg?height=200&width=300",
    title: "Our Story",
    description: "FitClub was founded by a group of passionate fitness enthusiasts who wanted to create a space without the intimidation of a traditional gym.",
  },
  {
    img: "/placeholder.svg?height=200&width=300",
    title: "Our Values",
    description: "We value community, inclusivity, and results-driven training. Fitness should be accessible to everyone.",
  },
];

const teamData = [
  { img: "/images/S1.jpg", name: "John Doe", role: "Founder & CEO" },
  { img: "/images/S2.avif", name: "Jane Smith", role: "Head Trainer" },
  { img: "/images/S3.jpg", name: "Bob Johnson", role: "Operations Manager" },
];

const testimonialData = [
  "FitClub has changed my life. The community is so supportive and the trainers are amazing.",
  "I was hesitant to join a gym, but FitClub has been a game-changer.",
  "FitClub is more than just a gym - it's a community. I've made lifelong friends.",
];

const randomReviews = [
  { name: "Sarah L.", comment: "The facilities are top-notch and always clean. I love the variety of classes offered!", rating: 5 },
  { name: "Mike R.", comment: "Trainers here are knowledgeable and motivating. They've helped me achieve goals I never thought possible.", rating: 5 },
  { name: "Emily K.", comment: "Great atmosphere and friendly staff. It's my favorite place to work out!", rating: 4 },
  { name: "David W.", comment: "The 24/7 access is super convenient for my schedule. Highly recommend!", rating: 5 },
  { name: "Lisa M.", comment: "I've tried many gyms, but FitClub stands out with its community feel and excellent equipment.", rating: 4 },
];

const staticComments = [
  { name: "John D.", comment: "I've been a member for 2 years now, and I can't imagine working out anywhere else!", isStatic: true },
  { name: "Emma S.", comment: "The personal training sessions have been life-changing. Highly recommend!", isStatic: true },
  { name: "Alex M.", comment: "Love the variety of classes. There's always something new to try!", isStatic: true },
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

const ReviewsSection = () => {
  const [comments, setComments] = useState([...staticComments]);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });
  const reviewsRef = useRef(null);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('gymComments')) || [];
    setComments([...staticComments, ...storedComments]);

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
        {randomReviews.map((review, index) => (
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