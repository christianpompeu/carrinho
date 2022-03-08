import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.2.60.248:3333',
});
