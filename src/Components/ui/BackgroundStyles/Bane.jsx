import React from "react";
import "./Bane.css";
import bane from "../../../assets/bane-background.jpg";

function Bane() {
  return (
    <figure className="bane__wrapper">
      <img src={bane} alt="" className="bane" />
      <div className="home__title--wrapper">
        <div className="home__title--position">
          <h1 className="home__title">
            Create an account to search thousands of movies and shows!
          </h1>
        </div>
      </div>
    </figure>
  );
}

export default Bane;
