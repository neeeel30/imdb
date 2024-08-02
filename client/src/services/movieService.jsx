import api from '../utils/api';

const getMovies = async () => {
  const response = await api.get('/movies');
  return response.data;
};

const getMovieById = async (id) => {
  const response = await api.get(`/movies/${id}`);
  return response.data;
};

const createMovie = async (movie) => {
  const response = await api.post('/movies', movie, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

const updateMovie = async (id, movie) => {
  const response = await api.put(`/movies/${id}`, movie, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

const deleteMovie = async (id) => {
  const response = await api.delete(`/movies/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export default {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
