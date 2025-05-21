import React from 'react'
import './Captain.css'
import captain from '../../../assets/cpt-america-background.jpg'

function Captain() {
    return (
      <figure className="captain__wrapper">
        <img src={captain} alt="" className="captain" />
      </figure>
    );
}

export default Captain
