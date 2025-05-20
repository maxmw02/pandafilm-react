import React, { useEffect, useState } from "react";
import "./Login.css";
import Rocky from "../../Components/ui/BackgroundStyles/Rocky";
import Martian from "../../Components/ui/BackgroundStyles/Martian";
import Dune from "../../Components/ui/BackgroundStyles/Dune";
import Shawshank from "../../Components/ui/BackgroundStyles/Shawshank";
import Sniper from "../../Components/ui/BackgroundStyles/Sniper";
import Wallace from "../../Components/ui/BackgroundStyles/Wallace";
import { login, signup } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
      navigate("/");
    } catch (error) {
      console.error("Authentication error:", error);
    }
    setLoading(false);
  };

  return (
    <div id="login">
      <div className="login__background">
        <Rocky />
        <Martian />
        <Dune />
        <Shawshank />
        <Sniper />
        <Wallace />
      </div>
      {loading ? (
        <div className="login__loader">
          <FontAwesomeIcon icon="spinner" />
        </div>
      ) : (
        <div className="login">
          <div className="login__form">
            <h1 className="login__title">{signState}</h1>
            <form>
              {signState === "Sign Up" ? (
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              ) : (
                <></>
              )}
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <button type="submit" onClick={user_auth} className="submit">
                {signState}
              </button>
              <div className="form__help">
                <div className="remember">
                  <input type="checkbox" />
                  <label htmlFor="">Remember Me</label>
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
                    >
                      Sign In Now
                    </span>
                  </p>
                )}
              </div>
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
