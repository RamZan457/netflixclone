// Header.jsx
import React, { useState } from "react";
import "./Header.css";
import SignInForm from "./signin/SignInForm";

const Header = () => {
  const [showSignInForm, setShowSignInForm] = useState(false);

  const handleSignInClick = () => {
    setShowSignInForm(true);
  };

  const handleCloseClick = () => {
    setShowSignInForm(false);
  };

  return (
    <div className="header-container">
      <div className="logo">Netflix</div>
      {!showSignInForm && (
        <button className="sign-in-button" onClick={handleSignInClick}>
          Sign In
        </button>
      )}
      {showSignInForm && (
        <div className="sign-in-form-container">
          <button className="close-button" onClick={handleCloseClick}>
            &#10006;
          </button>
          <SignInForm />
        </div>
      )}
    </div>
  );
};

export default Header;
