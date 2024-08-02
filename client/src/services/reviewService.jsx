import api from '../utils/api';

const getReviews = async () => {
  const response = await api.get('/reviews');
  return response.data;
};

const getReviewById = async (id) => {
  const response = await api.get(`/reviews/${id}`);
  return response.data;
};

const createReview = async (review) => {
  const response = await api.post('/reviews', review);
  return response.data;
};

const updateReview = async (id, review) => {
  const response = await api.put(`/reviews/${id}`, review);
  return response.data;
};

const deleteReview = async (id) => {
  const response = await api.delete(`/reviews/${id}`);
  return response.data;
};

export default {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
