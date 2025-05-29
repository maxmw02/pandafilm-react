import React, { useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Nav from "../../Components/Nav/Nav";
import Results from "../../Components/Results/Results";
import Footer from "../../Components/Footer/Footer";
import Vader from "../../Components/ui/BackgroundStyles/Vader";


function Search({ movies, setMovieSearch, fetchMovies }) {

  return (
    <div>
      <Nav />
      <div className="search__results">
        <SearchBar
          background={<Vader />}
          setMovieSearch={setMovieSearch}
          fetchMovies={fetchMovies}
        />
        <Results movies={movies} fetchMovies={fetchMovies} />
      </div>
      <Footer />
    </div>
  );
}

export default Search;
