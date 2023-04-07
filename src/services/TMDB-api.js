const KEY = "2d29d3dba915fe1ee7e36a677c1006f8";

const getTrending = () => {
  const request = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;

  return fetch(request).then((response) => {
    return response.json();
  });
};

const getMovieDetails = (movieId) => {
  const request = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`;

  return fetch(request).then((response) => {
    return response.json();
  });
};

const getMovieCast = (movieId) => {
  const request = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`;

  return fetch(request).then((response) => {
    return response.json();
  });
};

const getMovieReview = (movieId) => {
  const request = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`;

  return fetch(request).then((response) => {
    return response.json();
  });
};

const searchMovievs = (keyword) => {
  const request = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`;

  return fetch(request).then((response) => {
    return response.json();
  });
};

const tmdbApi = {
  getTrending,
  getMovieDetails,
  getMovieCast,
  getMovieReview,
  searchMovievs,
};

export default tmdbApi;
