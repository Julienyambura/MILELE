// frontend/src/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Milele Salon</h2>
      <p>"Milele is the best, forget the rest"</p>
      <div className="about-us">
        <h3>About Us</h3>
        <p>
          We offer a variety of high-quality services, from hair treatments to
          spa therapies and more!
        </p>
      </div>

      <section className="services">
        <Link to="/salon">
          <div className="service-card">
            <img src="/images/salon.jpg" alt="Salon" />
            <h3>Salon</h3>
          </div>
        </Link>

        <Link to="/spa">
          <div className="service-card">
            <img src="/images/spa.jpg" alt="Spa" />
            <h3>Spa</h3>
          </div>
        </Link>

        <Link to="/barbershop">
          <div className="service-card">
            <img src="/images/barbershop.jpg" alt="Barbershop" />
            <h3>Barbershop</h3>
          </div>
        </Link>

        <Link to="/physiotherapy">
          <div className="service-card">
            <img src="/images/physiotherapy.jpg" alt="Physiotherapy" />
            <h3>Physiotherapy</h3>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
