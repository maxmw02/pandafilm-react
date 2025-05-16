import React from "react";
import Movie from "../ui/Movie";
import "./Results.css";

function Results() {
  return (
    <section id="results">
      <div className="container">
        <div className="row">
          <Movie />
        </div>
      </div>
    </section>
  );
}

export default Results;
