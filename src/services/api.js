import axios from 'axios';

const api = axios.create({
  baseURL: 'http://motoristabora.com.br/backend/',
  // baseURL: 'http://localhost/bora_brasil_backend',
});

export default api;
