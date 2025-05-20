import React, { useState } from "react";
import Movie from "../ui/Movie";
import "./Results.css";

function Results() {

  return (
    <section id="results">
      <div className="container">
        <div className="row">
          <div className="results__header">
            <h3 className="results__title">
              Search Results
            </h3>
          </div>
          <Movie />
        </div>
      </div>
    </section>
  );
}

export default Results;
