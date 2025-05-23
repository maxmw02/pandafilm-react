
import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import MovieInfo from "./Pages/MovieInfo/MovieInfo";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info/:id" element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
