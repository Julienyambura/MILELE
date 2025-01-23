// frontend/src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Milele Salon - "The Best, Forget the Rest"</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/book-appointment">Book Appointment</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
