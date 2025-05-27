import React from "react";
import "./Movie.css";
import undraw from "../../assets/undraw-movie.svg";
import noImage from "../../assets/No_Image_Available.jpg";
import { Link } from "react-router-dom";

function Movie({ movies }) {
  if (!movies || movies.length === 0) {
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
              className="movie__wrapper"
              key={movie.imdbID}
            >
              <div className="movie">
                <figure className="movie__img--wrapper">
                  <img
                    className="movie__img"
                    src={movie?.Poster || noImage}
                    alt=""
                  />
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
