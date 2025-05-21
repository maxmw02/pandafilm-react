import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./SearchBar.css";

function SearchBar({ background }) {
  const [movieSearch, setMovieSearch] = useState("");

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=84eb025a&s=${movieSearch}`
    );
    const movieData = data.Search
    return movieData
  }


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
          />
          <button className="search__btn click" onClick={() => fetchMovies()}>
            <FontAwesomeIcon icon="magnifying-glass" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;