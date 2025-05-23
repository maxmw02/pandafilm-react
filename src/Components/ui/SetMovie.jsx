import React, { useEffect, useState } from 'react'
import './SetMovie.css'
import noImage from '../../assets/No_Image_Available.jpg'
import axios from 'axios';

function SetMovie({ setMovie, slice }) {

    const [movies, setMovies] = useState([]);

    async function fetchMovies() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=84eb025a&s=${setMovie}`
      );
      const movieData = data.Search;
      setMovies(movieData || []);
      console.log(movieData);
    }

    useEffect (() => {
        fetchMovies()
    }, [])

    return (
        <div className="movie__list">
        {movies
          .map((movie) => (
            <div className="movie__wrapper" key={movie.imdbID}>
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
            </div>
          ))
          .slice(0, 3)}
      </div>
    );
}

export default SetMovie
