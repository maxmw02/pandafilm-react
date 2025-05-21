import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movie.css";
import { movieData } from '../SearchBar/SearchBar'

function Movie() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?apikey=84eb025a&s=fast"
    );
    const movieData = data.Search;
    setMovies(movieData);
    console.log(movieData);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie__list">
      {movies
        .map((movie) => (
          <div className="movie__wrapper" key={movie.imdbID}>
            <div className="movie">
              <figure className="movie__img--wrapper">
                <img className="movie__img" src={movie?.Poster} alt="" />
              </figure>
              <div className="movie__description">
                <div className="movie__title">{movie?.Title}</div>
                <div className="movie__year">{movie?.Year}</div>
              </div>
            </div>
          </div>
        ))
        .slice(0, 9)}
    </div>
  );
}

export default Movie;
