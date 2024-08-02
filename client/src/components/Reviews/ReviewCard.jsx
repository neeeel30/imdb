import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>Release Date: {movie.releaseDate}</p>
      <p>{movie.description}</p>
      <p>Director: {movie.director}</p>
      <p>Cast: {movie.cast.join(', ')}</p>
    </div>
  );
};

export default MovieDetail;
