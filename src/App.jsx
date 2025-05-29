import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import MovieInfo from "./Pages/MovieInfo/MovieInfo";
import { useState, useEffect } from "react";
import axios from "axios";

// PrivateRoutes component for protected routes
function PrivateRoutes({ isLoggedIn }) {
  // No children prop needed directly here with Outlet
  const navigate = useNavigate();

  useEffect(() => {
    // This effect runs on component mount and when isLoggedIn changes
    if (!isLoggedIn) {
      // If not logged in, redirect to login page.
      // `replace: true` prevents adding '/login' to the history stack,
      // so the user can't hit back to get to the protected page.
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]); // Dependencies for useEffect

  // If logged in, render the child routes using <Outlet />
  // If not logged in, this component will trigger a redirect via useEffect,
  // so rendering null here is fine (it won't actually be visible before redirect).
  return isLoggedIn ? <Outlet /> : null;
}

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state

  async function fetchMovies() {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=84eb025a&s=${movieSearch}`
      );
      const movieData = data.Search;
      setMovies(movieData || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // Ensure movies is an empty array on error
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Route: Login Page */}
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route index element={<Home />} />
          <Route path="info/:id" element={<MovieInfo />} />

          {/* Protected Routes Group */}
          {/* This parent route uses PrivateRoutes as its element. */}
          {/* If isLoggedIn is false, PrivateRoutes will redirect to /login. */}
          {/* If isLoggedIn is true, PrivateRoutes will render its <Outlet />, */}
          {/* which in turn renders the matched child route (Home, Search, MovieInfo). */}
          <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
            {/* Home Page: Renders when path is exactly "/" */}
            {/* Search Page: Path is relative to the parent path ("/search") */}
            <Route
              path="search"
              element={
                <Search
                  setMovieSearch={setMovieSearch}
                  movies={movies}
                  fetchMovies={fetchMovies}
                />
              }
            />
            {/* Movie Info Page: Path is relative ("/info/:id") */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
