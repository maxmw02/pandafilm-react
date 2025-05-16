import React from "react";
import "./Bane.css";
import bane from "../../../assets/bane-background.jpg";

function Bane() {
  return (
    <figure className="bane__wrapper">
      <img src={bane} alt="" className="bane" />
    </figure>
  );
}

export default Bane;
