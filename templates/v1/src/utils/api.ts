import axios, { AxiosInstance } from 'axios';
import { VITE_BASE_API } from '../config/env';

export const apiClient: AxiosInstance = axios.create({
  baseURL: VITE_BASE_API,
  timeout: 30000,
  headers: {
    'X-CSRF-TOKEN': await localStorage.getItem('token'),
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
