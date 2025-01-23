// frontend/src/components/Services.js
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {/* Salon Service */}
        <div className="service-item">
          <Link to="/salon">
            <img
              src="https://via.placeholder.com/250x150"
              alt="Salon Service"
              className="service-image"
            />
            <h3 className="service-name">Salon</h3>
          </Link>
        </div>

        {/* Spa Service */}
        <div className="service-item">
          <Link to="/spa">
            <img
              src="https://via.placeholder.com/250x150"
              alt="Spa Service"
              className="service-image"
            />
            <h3 className="service-name">Spa</h3>
          </Link>
        </div>

        {/* Barbershop Service */}
        <div className="service-item">
          <Link to="/barbershop">
            <img
              src="https://via.placeholder.com/250x150"
              alt="Barbershop Service"
              className="service-image"
            />
            <h3 className="service-name">Barbershop</h3>
          </Link>
        </div>

        {/* Physiotherapy Service */}
        <div className="service-item">
          <Link to="/physiotherapy">
            <img
              src="https://via.placeholder.com/250x150"
              alt="Physiotherapy Service"
              className="service-image"
            />
            <h3 className="service-name">Physiotherapy</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
