import React, { useState } from "react";
import Movie from "../ui/Movie";
import "./Results.css";

function Results({ movies, fetchMovies }) {
  if (!movies || movies.length === 0) {
    return (
      <section id="results">
        <div className="container">
          <div className="row">
            <div className="results__header"></div>
            <Movie movies={movies} fetchMovies={fetchMovies} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="results">
        <div className="container">
          <div className="row">
            <div className="results__header">
              <h3 className="results__title">Search Results</h3>
            </div>
            <Movie movies={movies} fetchMovies={fetchMovies} />
          </div>
        </div>
      </section>
    );
  }
}

export default Results;
