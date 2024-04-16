import React from 'react';
import './Card.css'; // Importing the Card component CSS file

const Card = ({ title, description }) => {
  return (
    <div className="card"> {/* Applying the 'card' class */}
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Sign Up</button>
    </div>
  );
};

export default Card;
