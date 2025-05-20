import React from 'react'
import './Wallace.css'
import wallace from '../../../assets/braveheart-background.jpg'

function Wallace() {
    return (
      <figure className="wallace__wrapper">
        <img src={wallace} alt="" className="wallace" />
      </figure>
    );
}

export default Wallace
