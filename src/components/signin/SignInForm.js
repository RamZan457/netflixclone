// SignInForm.js
import React, { useState } from "react";
import "./SignInForm.css"; // Import your CSS file for styling

const SignInForm = () => {
  // State to manage form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset form fields after submission
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
