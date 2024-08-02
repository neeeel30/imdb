import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MovieProvider } from './context/MovieContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import PrivateRoute from './utils/PrivateRoute';
import Login from "./components/Auth/Login";
import AddMovie from './pages/AddMovie';
import Register from "./components/Auth/Register";
import UpdateMovie from './pages/UpdateMovie';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <MovieProvider>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies/:id" element={<PrivateRoute element={Movie} />} />
              <Route path="/profile" element={<PrivateRoute element={Profile} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} /> 
              <Route path="/AddMovie" element={<PrivateRoute element={AddMovie} />} />
              <Route path="/update-movie/:id" element={<UpdateMovie />} /> {/* New route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </MovieProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
