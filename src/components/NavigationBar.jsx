// src/components/NavigationBar.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = ({ onSelectCategory }) => {
  const navigate = useNavigate(); // 👈 for programmatic navigation

  const handleHomeClick = () => {
    navigate("/"); // 👈 redirect to homepage
  };

  return (
    <div className="navbar">
      <button onClick={handleHomeClick} className="nav-btn">
        🏠 Home
      </button>

      <button onClick={() => onSelectCategory("all")} className="nav-btn">All</button>
      <button onClick={() => onSelectCategory("main course")} className="nav-btn">Main Course</button>
      <button onClick={() => onSelectCategory("snacks")} className="nav-btn">Snacks</button>
      <button onClick={() => onSelectCategory("beverages")} className="nav-btn">Beverages</button>
      <button onClick={() => onSelectCategory("desserts")} className="nav-btn">Desserts</button>
    </div>
  );
};

export default NavigationBar;
