import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import MovieInfo from "./Pages/MovieInfo/MovieInfo";
import { useState } from "react";
import axios from "axios";

function App() {
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


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <Search
                setMovieSearch={setMovieSearch}
                movies={movies}
                fetchMovies={fetchMovies}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/info/:id"
            element={<MovieInfo />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
