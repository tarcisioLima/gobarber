import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.12:3339',
});

export default api;
