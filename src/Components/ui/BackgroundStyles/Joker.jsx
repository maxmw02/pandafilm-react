import React from 'react'
import './Joker.css'
import joker from '../../../assets/joker-background.jpeg'

function Joker() {
    return (
      <figure className="joker__wrapper">
        <img src={joker} alt="" className="joker" />
      </figure>
    );
}

export default Joker
