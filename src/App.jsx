import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Note: Ensure all these components are correctly imported using 
// either named ({ ComponentName }) or default (ComponentName) imports 
// based on how they are exported in their respective files.

// Importing Pages
import HomePage from "./components/HomePage"; 
import Menupage1 from "./components/Menupage1";
import Menupage2 from "./components/Menupage2";
import LoginPage from "./components/LoginPage"; 

// Importing Components (These should NOT be routes, but we import them 
// here to ensure they exist and can be used by the pages)
// If these are exported with 'export const', use named imports:
// import { Button } from "./components/Button"; 
// import { Card } from "./components/Card";
// import { Dishcard } from "./components/Dishcard";
// import { NavigationBar } from "./components/NavigationBar";


import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          1. The root path should load the LoginPage OR HomePage. 
             If you want the LoginPage first, use it here.
        */}
        <Route path="/" element={<LoginPage />} />
        
        {/* 2. Define unique paths for your main pages. 
             If HomePage is a component used *after* login, 
             it should have its own path, like /home, but we'll 
             use a nested structure if needed. 
             
             Since your HomePage has navigation, let's assume /home
        */}
        <Route path="/home" element={<HomePage />} />
        
        {/* 3. Define the two canteen menu routes used in HomePage.jsx */}
        <Route path="/canteen1" element={<Menupage1 />} />
        <Route path="/canteen2" element={<Menupage2 />} />

        {/* If you want the HomePage to load when the user is logged in, 
          you typically replace the <LoginPage /> element with 
          <HomePage /> element in the root route after login logic is added. 
          For now, we use a separate /home route to test the structure.
        */}

      </Routes>
    </BrowserRouter>
  );
}
