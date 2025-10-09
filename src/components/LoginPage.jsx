import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Ensure the file name and extension here EXACTLY match the file in src/assets/
import backgroundImageURL from '../assets/Loginpage.jpeg'; 

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Regex: at least 8 chars, 1 uppercase, 1 digit, 1 special char
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      console.error("Please fill in all fields"); 
      return;
    }

    if (!passwordRegex.test(password)) {
      console.error(
        "Password must be at least 8 characters, include 1 uppercase, 1 digit, and 1 special character."
      );
      return;
    }

    console.log("Logging in with:", { username, password });

    // Assuming authentication passed
    navigate("/home");
  };

  return (
    <div
      // FIX: Removed redundant vh-100 class name
      className="d-flex justify-content-center align-items-center"
      style={{ 
        width:'100vw',
        minHeight:'100vh',
        backgroundImage: `url(${backgroundImageURL})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="p-4 shadow-lg rounded login-box"
        style={{
          width: "22rem",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <h2 className="text-center mb-4 text-white fw-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label text-white">Username</label>
            <input
              type="text"
              className="form-control" 
              name="username"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #f8f9fa",
                color: "#f8f9fa", 
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control" 
              name="password"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #f8f9fa",
                color: "#f8f9fa", 
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-end mb-3">
            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{ color: "#003366" }}
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-outline-light w-100 fw-semibold"
          >
            Login
          </button>
        </form>
      </div>

      {/* Extra CSS */}
      <style>
        {`
          a:hover {
            color: #0055aa !important;
          }
          .login-box:hover {
            box-shadow: 0 0 35px rgba(255, 255, 255, 0.8);
            transform: scale(1.02);
          }
          /* Ensure text is white when input is focused/active */
          .form-control:focus {
            color: #f8f9fa !important;
            background-color: transparent !important;
            border-color: #f8f9fa !important;
            box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.25) !important;
          }
        `}
      </style>
    </div>
  );
}
