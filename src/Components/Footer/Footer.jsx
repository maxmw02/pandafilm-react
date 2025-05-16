import React from "react";
import "./Footer.css"
import logo from "../../assets/PandaFilm.png";

function Footer() {
  return (
    <footer>
      <div className="gradient"></div>
      <div className="container">
        <div className="footer__row">
          <a href="/">
          <figure className="footer__logo">
            <img className="footer__logo--img" src={logo} alt="" />
          </figure>
          </a>
          <div className="footer__list">
            <a className="footer__link link__hover--effect click" href="/">Home</a>
            <a className="footer__link link__hover--effect click" href="">Movies</a>
            <a className="footer__link link__hover--effect click" href="/search">Search</a>
            <a className="footer__link link__hover--effect click" href="/login">Login</a>
          </div>
          <div className="copyright">Copyright © 2025 PandaFilm</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
