import React, { useEffect, useState } from "react";
import "./Movie.css";
import undraw from "../../assets/undraw-movie.svg";

function Movie({ movies, fetchMovies }) {
  const [moviesExist, setMoviesExist] = useState(true);


  useEffect (() => {
    if (!movies || movies.length === 0) {
      setMoviesExist(false);
    }
  }, [])

  return moviesExist ? (
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
  ) : (
    <div className="search__again">
      <img src={undraw} alt="" />
      <h2 className="search__again--title">Try a Search!</h2>
    </div>
  );
}

export default Movie;
