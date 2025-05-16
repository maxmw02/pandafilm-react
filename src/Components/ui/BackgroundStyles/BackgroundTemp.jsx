import React from 'react'

function BackgroundTemp({ img }) {
    return (
      <figure className="background__wrapper">
        <img src={img} alt="" className="background"/>
      </figure>
    );
}

export default BackgroundTemp
