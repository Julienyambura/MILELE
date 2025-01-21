import React, { useState } from "react";
import axios from "axios";

const AppointmentPage = () => {
  // State to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare the data to send to the backend
    const appointmentData = {
      name,
      email,
      phone,
      service,
      date,
      time,
    };

    // Send a POST request to book the appointment
    axios
      .post("http://localhost:5000/appointment", appointmentData)
      .then((response) => {
        setLoading(false);
        setMessage("Your appointment has been booked successfully!");
        // Reset form fields after successful submission
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setDate("");
        setTime("");
      })
      .catch((err) => {
        setLoading(false);
        setMessage("Something went wrong. Please try again later.");
        console.error(err);
      });
  };

  return (
    <div className="appointment-page">
      <h1>Book Your Appointment</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">Select Service</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Choose a service</option>
            <option value="Haircut">Haircut</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Massage">Massage</option>
            <option value="Foot Care">Foot Care</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default AppointmentPage;
