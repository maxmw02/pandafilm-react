import React, { useEffect } from "react";
import logo from "../../assets/PandaFilm.png";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserStore } from "../../useStore";

function Nav() {

  const currentUser = useUserStore()
  console.log(currentUser)

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
              <li className="nav__link click">
                <a href="#" className="nav__link--anchor link__hover--effect">
                  About
                </a>
              </li>
              <li className="nav__link click">
                <a href="/search" className="nav__link--anchor link__hover--effect">
                  <FontAwesomeIcon icon="magnifying-glass"/>
                </a>
              </li>
              <li className="nav__link click">
                <a href="/login" className="nav__link--anchor nav__link--main">
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
