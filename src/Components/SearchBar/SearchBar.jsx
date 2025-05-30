import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

function SearchBar({ background, fetchMovies, setMovieSearch, movieSearch }) {
  const navigate = useNavigate()

  return (
    <div>
      {background}
      <div className="search__wrapper">
        <h2 className="search__title">Browse Movies</h2>
        <div className="search__bar">
          <input
            id="search__input"
            type="text"
            placeholder="Search..."
            value={movieSearch}
            onChange={(event) => setMovieSearch(event.target.value)}
            onKeyUp={(event) => {
              if (event.key === "Enter") fetchMovies(event.target.value);
            }}
          />
          <button className="search__btn click" onClick={() => {
            fetchMovies()
            navigate('/search')
            }} >
            <FontAwesomeIcon icon="magnifying-glass" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
