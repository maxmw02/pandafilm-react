import React, { useEffect, useState } from "react";
import logo from "../../assets/PandaFilm.png";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, logout } from "../../firebase";

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <nav>
      <div className="nav__container">
        <div className="nav__row">
          <div className="nav__wrapper">
            <a href="/">
              <img className="nav__logo" src={logo} alt="" />
            </a>
            <ul className="nav__links">
              <li className="nav__link click">
                <a href="/" className="nav__link--anchor link__hover--effect">
                  Home
                </a>
              </li>
              <li className="nav__link">
                <a href="#" className="nav__link--anchor">
                  About
                </a>
              </li>
              <li className="nav__link click">
                <a
                  href="/search"
                  className="nav__link--anchor link__hover--effect"
                >
                  <FontAwesomeIcon icon="magnifying-glass" />
                </a>
              </li>
              <li className="nav__link click">
                {user ? (
                  <a
                    href="/login"
                    onClick={() => {logout()}}
                    className="nav__link--anchor nav__link--main"
                  >
                    Logout
                  </a>
                ) : (
                  <a
                    href="/login"
                    className="nav__link--anchor nav__link--main"
                  >
                   Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
