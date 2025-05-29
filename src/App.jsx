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
import { auth } from "./firebase";

// PrivateRoutes component for protected routes
function PrivateRoutes({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        const loggedIn = !!user
        setIsLoggedIn(loggedIn)
        
        if (!isLoggedIn) {
          navigate("/login");
        }
        localStorage.setItem("isLoggedIn", loggedIn.toString())
      })

      return () => unsubscribe()
  }, [isLoggedIn, navigate]); 

  return isLoggedIn ? <Outlet /> : null;
}

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
  const [loading, setLoading] = useState(false)

  async function fetchMovies() {
    setLoading(true)
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
    setLoading(false)
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
          <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}>
            {/* Home Page: Renders when path is exactly "/" */}
            {/* Search Page: Path is relative to the parent path ("/search") */}
            <Route
              path="search"
              element={
                <Search
                  setMovieSearch={setMovieSearch}
                  movies={movies}
                  fetchMovies={fetchMovies}
                  loading={loading}
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
