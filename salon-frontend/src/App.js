import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/App.css";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./Home";
import AppointmentForm from "./components/AppointmentForm";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Services from "./components/ Services";
import SalonPage from "./components/Salon";
import SpaPage from "./components/Spa";
import BarbershopPage from "./components/Barbershop";
import PhysiotherapyPage from "./components/Physiotherapy";

import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<AppointmentForm />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/services" component={Services} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/salon" element={<SalonPage />} />
          <Route path="/spa" element={<SpaPage />} />
          <Route path="/barbershop" element={<BarbershopPage />} />
          <Route path="/physiotherapy" element={<PhysiotherapyPage />} />
        </Routes>
        <Footer />;
      </div>
    </Router>
  );
};

export default App;
