import React from "react";
import "./SearchBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar({ background }) {
  return (
    <div>
      {background}
      <div className="search__wrapper">
        <h2 className="search__title">Browse Movies</h2>
        <div className="search__bar">
            <input id="search__input" type="text" placeholder="Search..."/>
            <button className="search__btn click">
                <FontAwesomeIcon icon="magnifying-glass"/>
            </button>
        </div>
      </div>

    </div>
  );
}

export default SearchBar;
