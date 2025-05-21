import React from 'react'
import './Jones.css'
import jones from '../../../assets/indiana-jones-background.jpg'

function Jones() {
    return (
      <figure className="jones__wrapper">
        <img src={jones} alt="" className="jones" />
      </figure>
    );
}

export default Jones
