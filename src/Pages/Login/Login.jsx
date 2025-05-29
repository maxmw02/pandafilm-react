import React, { useEffect, useState } from "react";
import "./Login.css";
import { login, signup, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rocky from "../../Components/ui/BackgroundStyles/Rocky";
import Martian from "../../Components/ui/BackgroundStyles/Martian";
import Dune from "../../Components/ui/BackgroundStyles/Dune";
import Shawshank from "../../Components/ui/BackgroundStyles/Shawshank";
import Sniper from "../../Components/ui/BackgroundStyles/Sniper";
import Wallace from "../../Components/ui/BackgroundStyles/Wallace";
import Interstellar from "../../Components/ui/BackgroundStyles/Interstellar";
import Jones from "../../Components/ui/BackgroundStyles/Jones";
import Fury from "../../Components/ui/BackgroundStyles/Fury";
import Revenant from "../../Components/ui/BackgroundStyles/Revenant";
import Joker from "../../Components/ui/BackgroundStyles/Joker";
import Captain from "../../Components/ui/BackgroundStyles/Captain";

function Login({ setIsLoggedIn }) {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const user_auth = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior (page reload)
    console.log("user_auth function called. Current signState:", signState);
    setLoading(true); // Show loading spinner

    try {
      if (signState === "Sign In") {
        console.log("Attempting to sign in with email:", email);
        await login(email, password); // Call Firebase login function
        console.log("Firebase login successful!");
      } else {
        // signState === "Sign Up"
        console.log("Attempting to sign up with name:", name, "email:", email);
        await signup(name, email, password); // Call Firebase signup function
        console.log("Firebase signup successful!");
      }

      // If either login or signup is successful (no error was thrown):
      console.log("Setting isLoggedIn to true in App.jsx state.");
      setIsLoggedIn(true); // Update the authentication state in App.jsx

      console.log("Navigating to home page (/).");
      navigate("/"); // Redirect to the home page
    } catch (error) {
      // If an error occurs during Firebase authentication
      console.error("Authentication error caught in Login.jsx:", error);
      // Display a user-friendly alert with the Firebase error message
      alert(error.message || "An unexpected authentication error occurred.");
    } finally {
      // This block runs whether try succeeds or catch fails
      setLoading(false); // Hide loading spinner
      console.log("user_auth function execution finished.");
    }
  };

  return (
    <div id="login">
      <div className="login__background">
        {/* Render your background components */}
        <Rocky />
        <Martian />
        <Dune />
        <Shawshank />
        <Sniper />
        <Wallace />
        <Interstellar />
        <Jones />
        <Fury />
        <Revenant />
        <Joker />
        <Captain />
      </div>

      {/* Conditional rendering for loading spinner or login form */}
      {loading ? (
        <div className="login__loader">
          <FontAwesomeIcon icon="spinner" spin size="2x" />
        </div>
      ) : (
        <div className="login">
          <div className="login__form">
            <h1 className="login__title">{signState}</h1>
            <form onSubmit={user_auth}>
              {" "}
              {/* Use onSubmit on the form to trigger user_auth */}
              {signState === "Sign Up" && ( // Only show name input if signing up
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  required // Make name required for signup
                />
              )}
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required // Make email required
              />
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required // Make password required
              />
              {/* Removed onClick from button since form onSubmit handles it */}
              <button type="submit" className="submit">
                {signState}
              </button>
              <div className="form__help">
                <div className="remember">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <p>Need Help?</p>
              </div>
            </form>

            <div className="form__lower">
              <div className="form__switch">
                {signState === "Sign In" ? (
                  <p>
                    New to PandaFlim?{" "}
                    <span
                      onClick={() => {
                        setSignState("Sign Up");
                      }}
                      className="form__link" // Add a class for styling clickability
                    >
                      Sign Up Now
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an Account?{" "}
                    <span
                      onClick={() => {
                        setSignState("Sign In");
                      }}
                      className="form__link" // Add a class for styling clickability
                    >
                      Sign In Now
                    </span>
                  </p>
                )}
              </div>
              {/* This link will bypass login, which might be undesirable for protected routes */}
              {/* Consider removing it or making it go to a public landing page */}
              <a className="home" href="/">
                Home
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

