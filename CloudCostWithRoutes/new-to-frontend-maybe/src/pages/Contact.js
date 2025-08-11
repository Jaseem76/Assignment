import  { useState } from "react";
import "./Contact.css";

function Contact() {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">
        For any queries or support contact:
        <span className="contact-email"> cloudcostsupport@gmail.com</span>
      </h1>

      <div className="review-section">
        <h2 className="review-title">Leave a review</h2>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`star ${rating >= num ? "active" : ""}`}
              onClick={() => handleRating(num)}
            >
              ⭐
            </span>
          ))}
        </div>
        {rating > 0 && (
          <p className="thank-you">
            Thanks for giving us {rating} star{rating > 1 ? "s" : ""}! 
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
