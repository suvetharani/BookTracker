import axios from 'axios';

const api = axios.create({
  baseURL: 'https://booktracker-bn7n.onrender.com/api',
});

export default api;
