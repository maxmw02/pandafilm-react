import React, { useEffect, useState } from "react";
import "./MovieInfo.css";
import Nav from "../../Components/Nav/Nav";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function MovieInfo() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [movieInfo, setMovieInfo] = useState([]);

  async function fetchMovieInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=84eb025a&i=${id}`
    );
    const infoData = data;
    setMovieInfo(infoData || []);
    console.log(infoData);
    setLoading(false);
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
            {loading ? (
              <>
                <div className="skeleton__info--img-wrapper">
                  <div className="skeleton__info--img"></div>
                </div>
                <div className="skeleton__info--description">
                  <div className="skeleton__plot">
                    <div className="skeleton__plot--line"></div>
                    <div className="skeleton__plot--line"></div>
                    <div className="skeleton__plot--line"></div>
                    <div className="skeleton__plot--line"></div>
                    <div className="skeleton__plot--line"></div>
                  </div>
                  <div className="skeleton__details"></div>
                  <div className="skeleton__misc--details">
                    <div className="skeleton__detail"></div>
                    <div className="skeleton__detail"></div>
                    <div className="skeleton__detail"></div>
                    <div className="skeleton__detail"></div>
                    <div className="skeleton__detail"></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <figure className="info__img--wrapper">
                  <img
                    src={movieInfo.Poster}
                    alt=""
                    className="movie__info--img"
                  />
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
                      Written by:{" "}
                      <span className="dark">{movieInfo.Writer}</span>
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
                </div>{" "}
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MovieInfo;
