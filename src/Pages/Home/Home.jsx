import React from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Bane from "../../Components/ui/BackgroundStyles/Bane";

function Home() {
  return (
    <div>
      <Nav />
      <SearchBar background={<Bane />}/>
      <Footer />
    </div>
  );
}

export default Home;
