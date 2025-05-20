import { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { useUserStore } from "./useStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


function App() {

  const {currentUser, fetchUserInfo} = useUserStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid)
    })
    return () => {
      unSub()
    }
  }, [fetchUserInfo])

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
