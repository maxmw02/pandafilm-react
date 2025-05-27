import React, { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieInfo() {
  const { id } = useParams;
  console.log(id)

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
      <section id="movie__info">
        <div className="section__title">{movieInfo.Title}</div>
      </section>
    </div>
  );
}

export default MovieInfo;
