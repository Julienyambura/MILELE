// frontend/src/components/AppointmentForm.js
import React, { useState } from "react";
import axios from "axios";

const AppointmentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/book-appointment", form)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert("Error booking appointment");
      });
  };

  return (
    <div className="appointment-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <select name="service" onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="Salon">Salon</option>
          <option value="Spa">Spa</option>
          <option value="Barbershop">Barbershop</option>
          <option value="Physiotherapy">Physiotherapy</option>
        </select>
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
