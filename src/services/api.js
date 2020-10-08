import axios from 'axios';

const api = axios.create({
  baseURL: 'http://http://hmrconstrutora.com.br/backend/',
  // baseURL: 'http://localhost/hmr_construtora_backend',
});

export default api;
