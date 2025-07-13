import axios from 'axios';

const api = axios.create({
  baseURL: 'https://booktracker-bn7n.onrender.com',
});

export default api;
