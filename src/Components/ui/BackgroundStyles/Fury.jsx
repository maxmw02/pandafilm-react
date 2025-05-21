import React from 'react'
import fury from '../../../assets/fury-background.jpg'
import './Fury.css'

function Fury() {
    return (
      <figure className="fury__wrapper">
        <img src={fury} alt="" className="fury" />
      </figure>
    );
}

export default Fury
