import React from 'react'
import './Dune.css'
import dune from '../../../assets/dune-background.jpg'

function Dune() {
    return (
      <figure className="dune__wrapper">
        <img src={dune} alt="" className="dune" />
      </figure>
    );
}

export default Dune
