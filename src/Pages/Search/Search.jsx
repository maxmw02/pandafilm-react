import React, { useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Nav from "../../Components/Nav/Nav";
import Results from "../../Components/Results/Results";
import Footer from "../../Components/Footer/Footer";
import Vader from "../../Components/ui/BackgroundStyles/Vader";
import axios from "axios";

function Search() {

  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=84eb025a&s=${movieSearch}`
    );
    const movieData = data.Search;
    setMovies(movieData || [])
    console.log(movieData)
  }
  return (
    <div>
      <Nav />
      <SearchBar background={<Vader />} setMovieSearch={setMovieSearch} fetchMovies={fetchMovies}/>
      <Results movies={movies} fetchMovies={fetchMovies}/>
      <Footer />
    </div>
  );
}

export default Search;
