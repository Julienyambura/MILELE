import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch salon services from the backend
    axios
      .get("http://localhost:5000/services")
      .then((response) => setServices(response.data))
      .catch((err) => console.error(err));

    // Fetch products (like Castor Oil)
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Welcome to Our Salon</h1>
      <h2>Our Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.name}>
            {service.name} - ${service.price}
          </li>
        ))}
      </ul>
      <h2>Our Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.name}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
