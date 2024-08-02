import React, { useEffect } from 'react';
import { useMovies } from '../../context/MovieContext';
import MovieCard from './MovieCard';

const MovieList = () => {
  const { movies } = useMovies();

  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
};

export default MovieList;
