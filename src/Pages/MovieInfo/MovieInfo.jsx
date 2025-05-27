import React from 'react'
import Nav from '../../Components/Nav/Nav'

function MovieInfo({ movieInfo }) {
    return (
      <div>
        <Nav />
        {/* <section id="movie__info">
          {movieInfo.map(
            <div className="section__title">{movieInfo.title}</div>
          )}
        </section> */}
      </div>
    );
}

export default MovieInfo
