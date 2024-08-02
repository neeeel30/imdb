import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movieService from '../services/movieService';

const UpdateMovie = () => {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  console.log(id);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await movieService.getMovieById(id);
        console.log(movieData);
        setMovie(movieData);
      } catch (err) {
        setError('Failed to fetch movie details.');
      }
    };
    
    fetchMovie();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await movieService.updateMovie(id, movie);
      alert('Movie updated successfully!');
      navigate(`/movies/${id}`); // Redirect to movie detail page or list
    } catch (err) {
      setError('Failed to update movie.');
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>Update Movie</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={movie.title} onChange={handleChange} required />
        </label>
        <label>
          Genre:
          <input type="text" name="genre" value={movie.genre} onChange={handleChange} required />
        </label>
        <label>
          Director:
          <input type="text" name="director" value={movie.director} onChange={handleChange} required />
        </label>
        <label>
          Release Date:
          <input type="date" name="releaseDate" value={movie.releaseDate.substring(0, 10)} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={movie.description} onChange={handleChange} required />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" min="1" max="10" value={movie.rating} onChange={handleChange} required />
        </label>
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
