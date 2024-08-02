// import React from 'react';
// import { Link } from 'react-router-dom';
// import MovieList from '../components/Movies/MovieList';

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <MovieList />
//       <Link to="/profile">Go to Profile</Link>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/Movies/MovieList';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Movie Hub</h1>
      <div className="movie-section">
        <MovieList />
      </div>
      <div className="profile-link">
        <Link to="/profile" className="profile-link-button">Go to Profile</Link>
      </div>
    </div>
  );
};

export default Home;
