import React, { useEffect, useState } from "react";
import "./MovieInfo.css";
import Nav from "../../Components/Nav/Nav";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function MovieInfo() {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState([]);

  async function fetchMovieInfo() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=84eb025a&i=${id}`
    );
    const infoData = data;
    setMovieInfo(infoData || []);
    console.log(infoData);
  }

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return (
    <div>
      <Nav />
      <section id="info">
        <div className="movie__title--wrapper">
          <div className="movie__info--title">{movieInfo.Title}</div>
        </div>
        <div className="info__row">
          <div className="movie__info">
            <figure className="info__img--wrapper">
              <img src={movieInfo.Poster} alt="" className="movie__info--img" />
            </figure>
            <div className="movie__info--description">
              <div className="movie__info--plot">{movieInfo.Plot}</div>
              <div className="movie__info--details">
                <div>{movieInfo.Year}</div>
                <div>{movieInfo.Rated}</div>
                <div>{movieInfo.Runtime}utes</div>{" "}
                <div>imdb: {movieInfo.imdbRating}</div>
              </div>
              <div className="movie__info--misc-details">
                <div>
                  Directed by:{" "}
                  <span className="dark">{movieInfo.Director}</span>
                </div>
                <div>
                  Written by: <span className="dark">{movieInfo.Writer}</span>
                </div>
                <div>
                  Notable actors:{" "}
                  <span className="dark">{movieInfo.Actors}</span>
                </div>
                <div>
                  Genre: <span className="dark">{movieInfo.Genre}</span>
                </div>
                <div>
                  Box Office:{" "}
                  <span className="dark">{movieInfo.BoxOffice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MovieInfo;
