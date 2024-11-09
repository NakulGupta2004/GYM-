import React, { useEffect, useState } from "react";
import { FaWifi, FaDumbbell, FaAppleAlt, FaRunning, FaHotTub, FaLock } from 'react-icons/fa';

import '../Style/Services.css'

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="service-card">
    <Icon className="service-icon" />
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

export default function Services() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeInEffect = setInterval(() => {
      setOpacity((prev) => {
        if (prev < 1) {
          return prev + 0.05;
        } else {
          clearInterval(fadeInEffect);
          return 1;
        }
      });
    }, 50);

    return () => clearInterval(fadeInEffect);
  }, []);

  const services = [
    { icon: FaWifi, title: "Free Wi-Fi", description: "Complimentary wireless internet service offered to members or visitors while at the gym." },
    { icon: FaDumbbell, title: "Personal Training", description: "Receive personalized fitness plans and guidance from expert trainers to help you reach your goals efficiently." },
    { icon: FaAppleAlt, title: "Nutrition Coaching", description: "Get custom meal plans and nutritional advice tailored to enhance your workout and overall health." },
    { icon: FaRunning, title: "Functional Training Area", description: "Engage in functional workouts designed to improve your strength, balance, and flexibility." },
    { icon: FaHotTub, title: "Spa & Sauna", description: "Relax and rejuvenate in our spa and sauna facilities, perfect for recovery and unwinding after a workout." },
    { icon: FaLock, title: "Locker Rooms", description: "Enjoy clean and spacious locker rooms with showers for a convenient post-workout experience." },
  ];

  return (
    <div className="services-container" style={{ opacity }}>
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}