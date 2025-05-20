import React from "react";
import './Sniper.css'
import sniper from '../../../assets/american-sniper-background.jpg'

function Sniper() {
  return (
    <figure className="sniper__wrapper">
      <img src={sniper} alt="" className="sniper" />
    </figure>
  );
}

export default Sniper;
