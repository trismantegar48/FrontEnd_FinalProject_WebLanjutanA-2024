import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Ganti dengan URL backend Anda
});

export default api;
