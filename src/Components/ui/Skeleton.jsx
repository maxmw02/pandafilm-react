import React from "react";
import './Skeleton.css'

function Skeleton() {
  return (
    <div className="skeleton__wrapper">
      <div className="skeleton__movie">
        <div className="skeleton__img--wrapper">
          <div className="skeleton__img"></div>
        </div>
        <div className="skeleton__description">
          <div className="skeleton__title"></div>
          <div className="skeleton__year"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
