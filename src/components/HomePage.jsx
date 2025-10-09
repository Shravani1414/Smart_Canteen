import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
// Link is imported for proper client-side routing in the bottom nav

export default function HomePage() {
  const [showCanteens, setShowCanteens] = useState(false);
  const navigate = useNavigate(); 

  const handleChooseCanteen = () => {
    setShowCanteens(true);
  };

  const handleCanteenClick = (canteenPath) => {
    // DO NOT USE alert() - it crashes the app environment.
    console.log(`Navigating to ${canteenPath}`); 
    navigate(canteenPath);
    setShowCanteens(false);
  };

  // Define the canteens with their paths
  const canteens = [
    { name: "Canteen No.1", path: "/canteen1" },
    { name: "Biotech Canteen", path: "/canteen2" },
  ];

  return (
    <div className="d-flex flex-column vh-100">
      {/* Header Section */}
      <div className="text-center p-4 bg-light flex-grow-1 mb-5 pb-5">
        <h1 className="fw-bold display-6 mb-3">Welcome to Our College Canteens</h1>
        <p className="text-muted fs-5">Delicious food at your fingertips 🍔🥤</p>

        {/* Action Buttons - Order Now & View Menu */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          {/* We link 'View Menu' to the first canteen page as a starting point */}
          <Link to="/canteen1" className="btn btn-primary px-4 py-2 shadow-sm">
            Order Now
          </Link>
          <button 
            className="btn btn-outline-secondary px-4 py-2"
            onClick={handleChooseCanteen} // View Menu now triggers the canteen selector
          >
            Choose Canteen
          </button>
        </div>
        
        {/* Canteen Selection Popup/Section */}
        {showCanteens && (
          <div className="container mt-5">
            <h5 className="mb-3 text-start text-dark">Select a Canteen:</h5>
            <div className="row g-3">
              {canteens.map((canteen, index) => (
                <div key={index} className="col-12 col-sm-6">
                  {/* Using a div with onClick to navigate to the respective menu page */}
                  <div
                    className="card shadow text-center p-4 border-primary"
                    style={{ cursor: "pointer", transition: "transform 0.2s" }}
                    onClick={() => handleCanteenClick(canteen.path)}
                  >
                    <h5 className="text-primary">{canteen.name}</h5>
                    <p className="small text-muted mb-0">Tap to view menu</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
                className="btn btn-sm btn-link text-danger mt-3"
                onClick={() => setShowCanteens(false)}
            >
                Close Selection
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation (Fixed) */}
      <nav className="navbar fixed-bottom navbar-light bg-white border-top shadow-lg p-2">
        <div className="container-fluid d-flex justify-content-around">
          {/* Using Link for all navigation items */}
          <Link to="/" className="text-decoration-none text-dark text-center">
            <span className="d-block">🏠</span> Home
          </Link>
          <Link to="/canteen1" className="text-decoration-none text-dark text-center">
            <span className="d-block">📋</span> Menu
          </Link>
          <Link to="#" className="text-decoration-none text-dark text-center">
            <span className="d-block">💳</span> Payment
          </Link>
          <Link to="#" className="text-decoration-none text-dark text-center">
            <span className="d-block">🎟</span> Token
          </Link>
          
          <Link to="#" className="text-decoration-none text-dark text-center">
            <span className="d-block">🛒</span> Cart
          </Link>
        </div>
      </nav>
    </div>
  );
}
