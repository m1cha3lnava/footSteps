import React from "react";
import "./signup.css";

const SignUp = ({ setIsSidebarOpen }) => {
  return (
    <div id="signupBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <form id="signupInput">
          <input
            className="input"
            type="text"
            name="initials"
            placeholder="Enter your initials"
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Re-enter your password"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
