const fetchTrending = () => {
  return fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=064d0f68fc8d301e95ee6e12c2b61335"
  ).then((res) => res.json());
};

const fetchMovieWithId = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=064d0f68fc8d301e95ee6e12c2b61335`
  ).then((res) => res.json());
};

const fetchCast = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=064d0f68fc8d301e95ee6e12c2b61335`
  ).then((res) => res.json());
};

const fetchReviews = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=064d0f68fc8d301e95ee6e12c2b61335`
  ).then((res) => res.json());
};
const fetchWithQuery = (query) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=064d0f68fc8d301e95ee6e12c2b61335`
  ).then((res) => res.json());
};

export default {
  fetchTrending,
  fetchMovieWithId,
  fetchCast,
  fetchReviews,
  fetchWithQuery,
};
