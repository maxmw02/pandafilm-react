import React from "react";
import './Home.css'
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Bane from "../../Components/ui/BackgroundStyles/Bane";
import SetMovie from "../../Components/ui/SetMovie";


function Home() {
  return (
    <div>
      <Nav />
      <Bane />
      <section id="example__movies">
        <div className="row">
          <div className="movies__section">
            <h1 className="movies__section--title">The Avengers</h1>
            <div className="setMovie__wrapper">
              <SetMovie setMovie={"avengers"} />
              </div>
          </div>
          <div className="movies__section">
            <h1 className="movies__section--title">Indiana Jones</h1>
            <div className="setMovie__wrapper">
              <SetMovie setMovie={"indiana jones"} />
              </div>
          </div>
          <div className="movies__section">
            <h1 className="movies__section--title">Alien</h1>
            <div className="setMovie__wrapper">
              <SetMovie setMovie={"alien"} />
              </div>
          </div>
          <div className="movies__section">
            <h1 className="movies__section--title">Die Hard</h1>
            <div className="setMovie__wrapper">
              <SetMovie setMovie={"die hard"} />
              </div>
          </div>
          <div className="movies__section">
            <h1 className="movies__section--title">Star Wars</h1>
            <div className="setMovie__wrapper">
              <SetMovie setMovie={"star wars"} />
              </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
