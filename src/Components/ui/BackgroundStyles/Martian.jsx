import React from 'react'
import './Martian.css'
import martian from '../../../assets/martian-background.jpg'

function Martian() {
    return (
      <figure className="martian__wrapper">
        <img src={martian} alt="" className="martian" />
      </figure>
    );
}

export default Martian
