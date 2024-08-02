// import React from 'react';

// const MovieDetail = ({ movie }) => {
//   return (
//     <div className="movie-detail">
//       <h1>{movie.title}</h1>
//       {/* <img src={movie.poster} alt={movie.title} /> */}
//       <p>Release Date: {movie.releaseDate}</p>
//       <p>{movie.description}</p>
//       <p>Director: {movie.director}</p>
//       {/* <p>Cast: {movie.cast.join(', ')}</p> */}
//     </div>
//   );  
// };

// export default MovieDetail;

import React from 'react';
import './MovieDetail.css'; // Import your CSS file for styling

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h1 className="movie-title">{movie.title}</h1>
      <div className="movie-details">
        <p className="movie-release-date"><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
        <p className="movie-description"><strong>Description:</strong> {movie.description}</p>
        <p className="movie-director"><strong>Director:</strong> {movie.director}</p>
        {/* Uncomment and use if `cast` data is available
        <p className="movie-cast"><strong>Cast:</strong> {movie.cast.join(', ')}</p> */}
      </div>
    </div>
  );
};

export default MovieDetail;
