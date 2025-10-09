// src/components/DishCard.jsx
import React from "react";
import "./DishCard.css";

const DishCard = ({ name, description, price, imageUrl, onAddToCart }) => {
  return (
    <div className="dish-card">
      <img src={imageUrl} alt={name} className="dish-image" />

      <div className="dish-info">
        <h3 className="dish-name">{name}</h3>
        <p className="dish-description">{description}</p>
        <p className="dish-price">₹{price.toFixed(2)}</p>
      </div>

      {/* Add to Cart Button */}
      <div className="dish-actions">
        <button className="add-to-cart-btn" onClick={() => onAddToCart(name)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishCard;