import React, { createContext, useContext, useState, useEffect } from 'react';
import movieService from '../services/movieService';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await movieService.getMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  const selectMovie = (movieId) => {
    const movie = movies.find((m) => m._id === movieId);
    setSelectedMovie(movie);
  };

  return (
    <MovieContext.Provider value={{ movies, selectedMovie,setSelectedMovie, selectMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  return useContext(MovieContext);
};

// import React, { createContext, useState, useContext, useEffect } from 'react';
// import movieService from '../services/movieService';

// const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const [currentMovieId, setCurrentMovieId] = useState(null);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // Fetch movies on component mount if needed
//     const fetchMovies = async () => {
//       try {
//         const movieList = await movieService.getAllMovies();
//         setMovies(movieList);
//       } catch (err) {
//         console.error('Failed to fetch movies', err);
//       }
//     };
    
//     fetchMovies();
//   }, []);

//   return (
//     <MovieContext.Provider value={{ currentMovieId, setCurrentMovieId, movies }}>
//       {children}
//     </MovieContext.Provider>
//   );
// };

// export const useMovie = () => useContext(MovieContext);

