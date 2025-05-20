import React from 'react'
import rocky from '../../../assets/rocky-background.jpg'
import './Rocky.css'

function Rocky() {
    return (
      <figure className="rocky__wrapper">
        <img src={rocky} alt="" className="rocky" />
      </figure>
    );
}

export default Rocky
