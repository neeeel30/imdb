// import React, { useState } from 'react';
// import movieService from '../services/movieService';

// const AddMovie = () => {
//   const [title, setTitle] = useState('');
//   const [genre, setGenre] = useState('');
//   const [director, setDirector] = useState('');
//   const [releaseDate, setReleaseDate] = useState('');
//   const [description, setDescription] = useState('');
//   const [rating, setRating] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const movieData = { title, genre, director, releaseDate, description, rating };
//       await movieService.createMovie(movieData);
//       alert('Movie added successfully!');
//       // Optionally reset the form
//       setTitle('');
//       setGenre('');
//       setDirector('');
//       setReleaseDate('');
//       setDescription('');
//       setRating('');
//     } catch (err) {
//       setError('Failed to add movie.');
//     }
//   };

//   return (
//     <div>
//       <h1>Add Movie</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         </label>
//         <label>
//           Genre:
//           <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
//         </label>
//         <label>
//           Director:
//           <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} required />
//         </label>
//         <label>
//           Release Date:
//           <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
//         </label>
//         <label>
//           Description:
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
//         </label>
//         <label>
//           Rating:
//           <input type="number" min="1" max="10" value={rating} onChange={(e) => setRating(e.target.value)} required />
//         </label>
//         <button type="submit">Add Movie</button>
//       </form>
//     </div>
//   );
// };

// export default AddMovie;
import React, { useState } from 'react';
import movieService from '../services/movieService';
import './AddMovie.css'; // Import your CSS file for styling

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const movieData = { title, genre, director, releaseDate, description, rating };
      await movieService.createMovie(movieData);
      alert('Movie added successfully!');
      // Optionally reset the form
      setTitle('');
      setGenre('');
      setDirector('');
      setReleaseDate('');
      setDescription('');
      setRating('');
    } catch (err) {
      setError('Failed to add movie.');
    }
  };

  return (
    <div className="add-movie-container">
      <h1>Add Movie</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="add-movie-form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter movie title"
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            placeholder="Enter genre"
          />
        </label>
        <label>
          Director:
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
            placeholder="Enter director's name"
          />
        </label>
        <label>
          Release Date:
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter movie description"
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            placeholder="Enter rating (1-10)"
          />
        </label>
        <button type="submit" className="submit-button">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
