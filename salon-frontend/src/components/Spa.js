// frontend/src/components/Spa.js
import React from "react";
import "./Spa.css"; // Make sure you have this file for custom styling

const Spa = () => {
  return (
    <div className="service-detail spa-detail">
      <h2 className="service-title">Spa Services</h2>
      <p className="service-description">
        Milele Spa is your sanctuary for rejuvenation and relaxation. Our
        services are designed to help you unwind and refresh your mind, body,
        and spirit. From soothing massages to luxurious facials, we offer a
        variety of treatments that will leave you feeling pampered and
        revitalized.
      </p>

      <h3 className="service-subtitle">Our Spa Services Include:</h3>
      <ul className="service-list">
        <li>Massage</li>
        <li>Moroccan Bath</li>
        <li>Body Scrub</li>
        <li>Body Wraps</li>
        <li>Body Mask</li>
        <li>Facials</li>
      </ul>

      <div className="service-image-container">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Spa Service"
          className="service-image"
        />
      </div>

      <p className="service-description">
        Whether you're looking to relax with a massage or rejuvenate with a body
        mask, our treatments will help you escape the stresses of daily life.
        Our trained specialists use the finest products to ensure that you have
        a calming and healing experience.
      </p>

      <button className="book-appointment-btn">
        <a href="/book-appointment" className="appointment-link">
          Book Appointment
        </a>
      </button>
    </div>
  );
};

export default Spa;
