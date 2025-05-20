import { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {

  // const navigate = useNavigate()

  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if(user) {
  //       console.log("logged in")
  //       navigate('/')
  //     } else {
  //       console.log("logged out")
  //     }
  //   })
  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
