import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://capstone-5ei5.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const profileService = {
  getProfile: (language = 'en') => api.get(`/profile/${language}`),
  updateProfile: (id, data) => api.put(`/profile/${id}`, data),
  createProfile: (data) => api.post('/profile', data),
};

export const contentService = {
  getContent: (type, language = 'en') => api.get(`/content?type=${type}&language=${language}`),
  getContentById: (id) => api.get(`/content/${id}`),
  createContent: (data) => api.post('/content', data),
};

export const mediaService = {
  getMedia: (type) => api.get(`/media${type ? `?type=${type}` : ''}`),
  uploadFile: (formData) => api.post('/media/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  addSocialMedia: (data) => api.post('/media/social', data),
};

export default api;