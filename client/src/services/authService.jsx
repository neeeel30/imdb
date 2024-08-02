import api from '../utils/api';

const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  const { data } = response;
  localStorage.setItem('token', data.token);
  return data;
};

const register = async (name, email, password) => {
  const response = await api.post('/auth/register', { name, email, password });
  const { data } = response;
  localStorage.setItem('token', data.token);
  return data;
};

const logout = () => {
  localStorage.removeItem('token');
};

const getCurrentUser = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await api.get('/auth/current', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
  return null;
};

export default {
  login,
  register,
  logout,
  getCurrentUser,
};
