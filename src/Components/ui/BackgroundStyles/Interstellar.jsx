import React from 'react'
import './Interstellar.css'
import interstellar from '../../../assets/interstellar-background.jpg'

function Interstellar() {
    return (
      <figure className="interstellar__wrapper">
        <img src={interstellar} alt="" className="interstellar" />
      </figure>
    );
}

export default Interstellar
