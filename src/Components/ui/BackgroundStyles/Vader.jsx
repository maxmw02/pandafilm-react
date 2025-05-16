import React from "react";
import "./Vader.css";
import vader from "../../../assets/vader-background.jpg";

function Vader() {
  return (
    <figure className="vader__wrapper">
      <img src={vader} alt="" className="vader" />
    </figure>
  );
}

export default Vader;
