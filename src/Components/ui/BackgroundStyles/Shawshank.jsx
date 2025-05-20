import React from 'react'
import './Shawshank.css'
import shawshank from '../../../assets/shawshank-background.jpg'

function Shawshank() {
    return (
      <figure className="shawshank__wrapper">
        <img src={shawshank} alt="" className="shawshank" />
      </figure>
    );
}

export default Shawshank
