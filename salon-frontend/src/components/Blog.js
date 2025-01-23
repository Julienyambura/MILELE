// frontend/src/components/Blog.js
import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Blog</h2>
      <div className="blog-posts">
        <div className="blog-post">
          <h3>Why Castor Oil is a Must-Have for Your Hair and Skin</h3>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Castor Oil Benefits"
          />
          <p>
            Castor oil is a powerful, natural oil that has been used for
            centuries for its amazing health benefits. Rich in ricinoleic acid,
            it helps to nourish the hair, boost its growth, and keep the scalp
            healthy. When used on the skin, castor oil can moisturize, reduce
            inflammation, and even help treat acne.
          </p>
          <p>
            Some of the key benefits of Castor Oil include:
            <ul>
              <li>
                <strong>Boosts Hair Growth:</strong> Stimulates hair follicles,
                promoting faster and thicker hair growth.
              </li>
              <li>
                <strong>Improves Scalp Health:</strong> Reduces dandruff and
                nourishes the scalp with essential fatty acids.
              </li>
              <li>
                <strong>Moisturizes Skin:</strong> Deeply hydrates the skin,
                making it soft and glowing.
              </li>
              <li>
                <strong>Anti-Inflammatory:</strong> Reduces swelling and redness
                on the skin, aiding in healing.
              </li>
            </ul>
          </p>
          <p>
            At Milele Salon, we sell high-quality Castor Oil to help you unlock
            the benefits of this natural wonder.{" "}
            <strong>
              Contact us today to purchase your bottle of premium Castor Oil!
            </strong>
            <Link to="/contact" className="contact-link">
              Click here to contact us
            </Link>
            .
          </p>
        </div>

        {/* Facial and Hair Treatments Post */}
        <div className="blog-post">
          <h3>The Importance of Facial and Hair Treatments</h3>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Facial and Hair Treatments"
          />
          <p>
            Taking care of your skin and hair is essential for overall health
            and well-being. Regular facial and hair treatments not only help you
            look your best but also provide deep nourishment and care that keeps
            your hair and skin vibrant.
          </p>
          <p>
            <strong>Facial Treatments</strong> can help improve your skin
            texture, hydrate dry areas, reduce signs of aging, and provide
            relaxation. At Milele Salon, our facial treatments are tailored to
            your unique skin needs, whether you have dry, oily, or combination
            skin.
          </p>
          <p>
            <strong>Hair Treatments</strong> are equally important to maintain
            strong, healthy hair. Whether you're looking to restore your hair's
            natural shine, manage hair loss, or repair damage from styling, our
            professional hair treatments can help you achieve your goals.
          </p>
          <p>
            Both facial and hair treatments are essential for maintaining a
            youthful appearance and healthy hair and skin. They allow for deeper
            cleansing, moisturizing, and healing that regular home routines
            simply can't provide.
          </p>
          <p>
            Ready to book your facial or hair treatment?{" "}
            <strong>Contact us today!</strong>{" "}
            <Link to="/contact" className="contact-link">
              Click here to contact us
            </Link>
            .
          </p>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Hair Care in Winter"
          />
          <p>
            Winter can be harsh on your hair, causing dryness and split ends.
            Here are some tips to keep your hair healthy and shiny during the
            cold months...
          </p>
        </div>

        <div className="blog-post">
          <h3>The Benefits of Regular Spa Treatments</h3>
          <img src="https://via.placeholder.com/600x300" alt="Spa Treatments" />
          <p>
            Regular spa treatments can reduce stress, improve skin, and boost
            your overall health. Learn about the various services that can help
            you unwind and rejuvenate...
          </p>
        </div>

        <div className="blog-post">
          <h3>Why Dreadlocks are the Perfect Protective Style</h3>
          <img src="https://via.placeholder.com/600x300" alt="Dreadlocks" />
          <p>
            Dreadlocks are not only stylish but also offer protection for your
            hair. Find out why they are becoming one of the most popular styles
            for people who want low-maintenance hair care...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
