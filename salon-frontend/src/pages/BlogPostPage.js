import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogPostPage = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the blog post by ID
    axios
      .get(`http://localhost:5000/blogs/${id}`) // Replace with your API endpoint
      .then((response) => {
        setPost(response.data); // Assuming the response contains the full post data
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not fetch the blog post.");
        setLoading(false);
      });
  }, [id]); // The ID changes when the user navigates to a different post

  // If loading, show a loading spinner
  if (loading) {
    return <div>Loading blog post...</div>;
  }

  // If there's an error fetching the post
  if (error) {
    return <div>{error}</div>;
  }

  // Render the full blog post
  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p> {/* Assuming `content` holds the full blog post */}
      
    </div>
  );
};

export default BlogPostPage;
