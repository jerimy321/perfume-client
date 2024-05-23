import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://223.130.153.50:8080',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;