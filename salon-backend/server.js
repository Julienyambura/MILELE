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

// Product Model (for castor oil and other products)
const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
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

// Get Salon Services
app.get("/services", (req, res) => {
  const services = [
    { name: "Hairdressing", price: 50 },
    { name: "Manicure", price: 30 },
    { name: "Pedicure", price: 40 },
    { name: "Massage", price: 70 },
    { name: "Foot Care", price: 50 },
    { name: "Haircut", price: 30 },
  ];
  res.json(services);
});

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

// Get Products (Castor Oil and others)
app.get("/products", (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json({ message: err.message }));
});

// Get Blog Posts
app.get("/blogs", (req, res) => {
  Blog.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(500).json({ message: err.message }));
});

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
