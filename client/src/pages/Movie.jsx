import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/Movies/MovieDetail';
import { useMovies } from '../context/MovieContext';

const Movie = () => {
  const { id } = useParams();
  const { selectMovie, selectedMovie } = useMovies();

  useEffect(() => {
    selectMovie(id);
  }, [id, selectMovie]);

  return (
    <div>
      <h1>Movie Details</h1>
      {selectedMovie ? <MovieDetail movie={selectedMovie} /> : <p>Loading...</p>}
    </div>
  );
};

export default Movie;
