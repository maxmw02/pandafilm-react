import React from 'react'
import './Revenant.css'
import revenant from '../../../assets/revenant-background.jpg'

function Revenant() {
    return (
      <figure className="revenant__wrapper">
        <img src={revenant} alt="" className="revenant" />
      </figure>
    );
}

export default Revenant
