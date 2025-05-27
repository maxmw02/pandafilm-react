import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import MovieInfo from "./Pages/MovieInfo/MovieInfo";
import { useState } from "react";
import axios from "axios";

function App() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);

  
  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=84eb025a&s=${movieSearch}`
    );
    const movieData = data.Search;
    setMovies(movieData || []);
    console.log(movieData);
  }
  
  async function fetchMovieInfo() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=84eb025a&i=${movies.imdbID}`
    );
    const infoData = data.Search;
    setMovieInfo(infoData || []);
    console.log(infoData);
  }

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} fetchMovieInfo={fetchMovieInfo} />
          <Route
            path="/search"
            element={<Search />}
            fetchMovieInfo={fetchMovieInfo}
            setMovieSearch={setMovieSearch}
            movies={movies}
            fetchMovies={fetchMovies}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/info/:id"
            element={<MovieInfo />}
            movieInfo={movieInfo}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
