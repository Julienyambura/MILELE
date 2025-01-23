const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// Define Mongoose Models

// Appointment Model
const Appointment = mongoose.model(
  "Appointment",
  new mongoose.Schema({
    name: String,
    email: String,
    service: String,
    date: String,
    time: String,
  })
);

// Blog Model
const Blog = mongoose.model(
  "Blog",
  new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
  })
);

// Routes

// Book an Appointment
app.post("/appointment", (req, res) => {
  const { name, email, service, date, time } = req.body;
  const appointment = new Appointment({ name, email, service, date, time });
  appointment
    .save()
    .then(() => res.json({ success: true }))
    .catch((err) =>
      res.status(500).json({ success: false, message: err.message })
    );
});
app.get("/api/appointments", (req, res) => {
  Appointment.find()
    .then((appointments) => res.json(appointments))
    .catch((err) => res.status(400).json("Error: " + err));
});

// backend/server.js

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log(
    `Contact Form Submission: Name: ${name}, Email: ${email}, Message: ${message}`
  );

  // For now, just send a success response.
  res.json({ status: "success", message: "Message received!" });
});

// Get Blog Posts
app.get("/blogs", (req, res) => {
  Blog.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(500).json({ message: err.message }));
});
// Serve the root route (GET /)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("Contact us page");
});

// Server Setup
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
