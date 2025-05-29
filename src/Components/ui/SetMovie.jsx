import React, { useEffect, useState } from "react";
import "./SetMovie.css";
import noImage from "../../assets/No_Image_Available.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

function SetMovie({ setHomeMovie, fetchMovieInfo }) {
  const [homeMovies, setHomeMovies] = useState([]);

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=84eb025a&s=${setHomeMovie}`
    );
    const homeMovieData = data.Search;
    setHomeMovies(homeMovieData);
    console.log(homeMovieData);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie__list">
      {homeMovies
        .map((movie) => (
          <Link
            to={`/info/${movie.imdbID}`}
            className="setMovies__wrapper movies__click"
            key={movie.imdbID}
            onClick={fetchMovieInfo}
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
        .slice(0, 3)}
    </div>
  );
}

export default SetMovie;
