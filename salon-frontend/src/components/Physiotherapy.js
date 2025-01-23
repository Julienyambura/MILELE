// frontend/src/components/Physiotherapy.js
import React from "react";
import "./Physiotherapy.css"; // Make sure to create this file for custom styling

const Physiotherapy = () => {
  return (
    <div className="service-detail physiotherapy-detail">
      <h2 className="service-title">Physiotherapy Services</h2>
      <p className="service-description">
        At Milele Physiotherapy, we focus on providing physical therapy
        solutions that help you recover, relieve pain, and enhance your
        mobility. Our treatments are designed to help you get back to a healthy
        lifestyle, whether you're recovering from an injury or managing a
        chronic condition.
      </p>

      <h3 className="service-subtitle">Our Physiotherapy Services Include:</h3>
      <ul className="service-list">
        <li>Sports Injury Rehabilitation</li>
        <li>Post-Surgery Rehabilitation</li>
        <li>Massage Therapy</li>
        <li>Dry Needling</li>
        <li>Joint Mobilization</li>
        <li>Postural Correction</li>
      </ul>

      <div className="service-image-container">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Physiotherapy Service"
          className="service-image"
        />
      </div>

      <p className="service-description">
        Our experienced physiotherapists work with you to create a personalized
        treatment plan to address your unique needs. Whether you're recovering
        from an injury or seeking to improve your physical function, we are here
        to support your journey to better health.
      </p>

      <button className="book-appointment-btn">
        <a href="/book-appointment" className="appointment-link">
          Book Appointment
        </a>
      </button>
    </div>
  );
};

export default Physiotherapy;
