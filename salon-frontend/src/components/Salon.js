// frontend/src/components/Salon.js
import React from "react";
import "./Salon.css"; // Ensure this file exists for custom styling

const Salon = () => {
  return (
    <div className="service-detail salon-detail">
      <h2 className="service-title">Salon Services</h2>
      <p className="service-description">
        Welcome to Milele Salon, where we provide top-notch services to cater to
        all your beauty needs. Whether you're looking for a bold new color, a
        fresh cut, or a relaxing hair and scalp treatment, our expert stylists
        are here to help.
      </p>

      <h3 className="service-subtitle">Our Salon Services Include:</h3>
      <ul className="service-list">
        <li>Color</li>
        <li>Highlights</li>
        <li>Relaxers</li>
        <li>Hair and Scalp Treatment</li>
        <li>Dreadlocks</li>
        <li>Fauxlocks</li>
        <li>Sistalocks</li>
        <li>Haircuts</li>
        <li>Weaving</li>
        <li>Braids</li>
        <li>Back-to-School Lines</li>
      </ul>

      <div className="service-image-container">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Salon Service"
          className="service-image"
        />
      </div>

      <p className="service-description">
        Our goal is to give you a hairstyle that boosts your confidence and
        enhances your natural beauty. Book your appointment now, and let our
        skilled stylists pamper you with the best salon services in town.
      </p>

      <button className="book-appointment-btn">
        <a href="/book-appointment" className="appointment-link">
          Book Appointment
        </a>
      </button>
    </div>
  );
};

export default Salon;
