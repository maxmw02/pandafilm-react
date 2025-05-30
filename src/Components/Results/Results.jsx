import React, { useState, useEffect } from "react"; 
import Movie from "../ui/Movie";
import "./Results.css";

function Results({ movies, fetchMovies, loading }) {
  const [sortType, setSortType] = useState(""); 
  const [displayedMovies, setDisplayedMovies] = useState([]); 

 
  useEffect(() => {
    let sortedMovies = [...movies]; 

    if (sortType === "NEWEST_TO_OLDEST") {
      sortedMovies.sort((a, b) => {
        const yearA = parseInt(a.Year);
        const yearB = parseInt(b.Year);
        return yearB - yearA;
      });
    } else if (sortType === "OLDEST_TO_NEWEST") {
      sortedMovies.sort((a, b) => {
        const yearA = parseInt(a.Year);
        const yearB = parseInt(b.Year); 
        return yearA - yearB;
      });
    }
    setDisplayedMovies(sortedMovies); 
  }, [movies, sortType]);

  if (!movies || movies.length === 0) {
    return (
      <section id="results">
        <div className="container">
          <div className="row">
            <div className="results__header"></div>
    
            <Movie
              movies={displayedMovies} 
              fetchMovies={fetchMovies}
              loading={loading}
            />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="results">
        <div className="container">
          <div className="row">
            <div className="results__header">
              <h3 className="results__title">Search Results</h3>
              <select
                className="filter"
                onChange={(event) => {
                  setSortType(event.target.value);
                }}
                value={sortType} 
              >
                <option value="" disabled>
                  Sort
                </option>
                <option value="NEWEST_TO_OLDEST">Year, Newest to Oldest</option>
                <option value="OLDEST_TO_NEWEST">Year, Oldest to Newest</option>
              </select>
            </div>
            <Movie
              movies={displayedMovies} 
              fetchMovies={fetchMovies}
              loading={loading}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Results;

// import React, { useState } from "react";
// import Movie from "../ui/Movie";
// import "./Results.css";

// function Results({ movies, fetchMovies, loading }) {
//   const [sortType, setSorttype] = useState("");
//   const [sorted, setSorted] = useState([])

//   const sortMovies = () => {
//     let sortedMovies = [...movies];
//     console.log(
//       "Original movies order:",
//       sortedMovies.map((m) => m.Title + "(" + m.Year + ")").join(",")
//     );
//     if (sortType) {
//       console.log("Sort type selected", sortType);

//       if (sortType === "NEWEST_TO_OLDEST") {
//         console.log("sorting by newest first");

//         sortedMovies.sort((a, b) => {
//           const yearA = parseInt(a.Year);
//           const yearB = parseInt(b.Year);

//           return yearB - yearA;
//         });
//       } else if (sortType === "OLDEST_TO_NEWEST") {
//         console.log("sorting by oldest first");

//         sortedMovies.sort((a, b) => {
//           const yearA = parseInt(a.Year);
//           const yearB = parseInt(b.Year);

//           return yearA - yearB;
//         });
//       }
//       setSorted(sortedMovies)
//       console.log(
//         "Sorted movies order:",
//         sortedMovies.map((m) => m.Title + " (" + m.Year + ")").join(", ")
//       );
//       console.log(sortedMovies)
//     }
//   };

//   if (!movies || movies.length === 0) {
//     return (
//       <section id="results">
//         <div className="container">
//           <div className="row">
//             <div className="results__header"></div>
//             <Movie
//               sorted={sorted}
//               movies={movies}

//               loading={loading}
//             />
//           </div>
//         </div>
//       </section>
//     );
//   } else {
//     return (
//       <section id="results">
//         <div className="container">
//           <div className="row">
//             <div className="results__header">
//               <h3 className="results__title">Search Results</h3>
//               <select
//                 className="filter"
//                 onChange={(event) => {
//                   setSorttype(event.target.value);
//                   sortMovies();
//                 }}
//               >
//                 <option value disabled selected>
//                   Sort
//                 </option>
//                 <option value="NEWEST_TO_OLDEST">Year, Newest to Oldest</option>
//                 <option value="OLDEST_TO_NEWEST">Year, Oldest to Newest</option>
//               </select>
//             </div>
//             <Movie
//               sorted={sorted}
//               movies={movies}
//               loading={loading}
//             />
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Results;
