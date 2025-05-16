import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Nav from "../../Components/Nav/Nav";
import Results from "../../Components/Results/Results";
import Footer from "../../Components/Footer/Footer";
import Vader from "../../Components/ui/BackgroundStyles/Vader";

function Search() {
  return (
    <div>
      <Nav />
      <SearchBar background={<Vader />}/>
      <Results />
      <Footer />
    </div>
  );
}

export default Search;
