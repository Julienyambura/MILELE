// frontend/src/components/Barbershop.js
import React from "react";
import "./Barbershop.css"; // Make sure to create this file for custom styling

const Barbershop = () => {
  return (
    <div className="service-detail barbershop-detail">
      <h2 className="service-title">Barbershop Services</h2>
      <p className="service-description">
        At Milele Barbershop, we provide premium grooming services tailored to
        your individual style. Whether you need a sharp haircut, beard shaping,
        or scalp treatments, our experienced barbers are here to deliver
        exceptional results that will make you look and feel your best.
      </p>

      <h3 className="service-subtitle">Our Barbershop Services Include:</h3>
      <ul className="service-list">
        <li>Hair and Scalp Treatment</li>
        <li>Color</li>
        <li>Beard and Mustache Shaping</li>
        <li>Scalp Scrub</li>
        <li>Face Scrub</li>
        <li>Dreadlocks</li>
      </ul>

      <div className="service-image-container">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Barbershop Service"
          className="service-image"
        />
      </div>

      <p className="service-description">
        Our goal is to provide you with a relaxing experience and a haircut that
        enhances your personality. From classic styles to modern trends, our
        barbers are experts in their craft and are dedicated to giving you the
        perfect look.
      </p>

      <button className="book-appointment-btn">
        <a href="/book-appointment" className="appointment-link">
          Book Appointment
        </a>
      </button>
    </div>
  );
};

export default Barbershop;
