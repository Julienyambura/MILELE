import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogPage.css";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog posts from the backend (if dynamic)
  useEffect(() => {
    // If you have a backend API to fetch posts
    axios
      .get("http://localhost:5000/blogs") // Replace with your API endpoint
      .then((response) => {
        setPosts(response.data); // Assuming the response is an array of blog posts
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not fetch blog posts.");
        setLoading(false);
      });
  }, []);

  // If loading, show a loading spinner
  if (loading) {
    return <div>Loading blog posts...</div>;
  }

  // If there's an error fetching the posts
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="blog-page">
      <h1>Our Salon Blog</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-item">
            <h2>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
