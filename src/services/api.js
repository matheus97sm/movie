import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM4NWJiMGZhYjMzZDhmMzg0ODZkODBkODIyODE0YiIsInN1YiI6IjVlNGIwYTI2OWI4NjE2MDAxMTY0ZjFlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ehRh2d6wTyyq_kbkqz3Bcc6Y6W5hAPKi8rxUBuo7dtw',
  },
});

export default api;
