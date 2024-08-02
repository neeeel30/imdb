// import React from 'react';
// import { Link } from 'react-router-dom';

// const MovieCard = ({ movie }) => {
//   return (
//     <div className="movie-card">
//       <img src={movie.poster} alt={movie.title} />
//       <h3>{movie.title}</h3>
//       <p>{movie.releaseDate}</p>
//       <Link to={`/movies/${movie._id}`}>View Details</Link>
//     </div>
//   );
// };

// export default MovieCard;
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'; // Import your CSS file for styling

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      {/* <img src={movie.poster} alt={movie.title} className="movie-poster" /> */}
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{new Date(movie.releaseDate).toLocaleDateString()}</p>
        <Link to={`/movies/${movie._id}`} className="movie-details-link">View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
