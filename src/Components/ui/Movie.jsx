import React from "react";
import "./Movie.css";
import undraw from "../../assets/undraw-movie.svg";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

function Movie({ movies, loading }) {
  if (loading) {
    return (
      <div className="movie__list">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  } else if (!movies || movies.length === 0) {
    return (
      <div className="search__again">
        <img src={undraw} alt="" />
        <h2 className="search__again--title">Try a Search!</h2>
      </div>
    );
  } else {
    return (
      <div className="movie__list">
        {movies
          .map((movie) => (
            <Link
              to={`/info/${movie.imdbID}`}
              className="movie__wrapper movies__click"
              key={movie.imdbID}
            >
              <div className="movie">
                <figure className="movie__img--wrapper">
                  <img className="movie__img" src={movie?.Poster} alt="" />
                </figure>
                <div className="movie__description">
                  <div className="movie__title">{movie?.Title}</div>
                  <div className="movie__year">{movie?.Year}</div>
                </div>
              </div>
            </Link>
          ))
          .slice(0, 9)}
      </div>
    );
  }
}

export default Movie;
