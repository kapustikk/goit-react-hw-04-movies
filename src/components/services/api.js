import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c828b854ef40a7dc6bde47f13c682e4b';

// const HOMEPAGE_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const fetchTrendingMovieForHomepage = async () => {
  try {
    const config = {
      url: `trending/movie/day`,
    };

    const { data } = await axios(config);
    return data.results;
  } catch (error) {
    new Error('Not found');
  }
};

const fetchMovies = async query => {
  if (!query) {
    return;
  }
  try {
    const config = {
      url: `search/movie`,
      params: {
        query,
      },
    };
    const { data } = await axios(config);
    return data.results;
  } catch (error) {
    new Error('Not found');
  }
};

const fetchMovieDetails = async movie_id => {
  try {
    const config = {
      url: `movie/${movie_id}`,
    };

    const { data } = await axios(config, movie_id);
    return data;
  } catch (error) {
    new Error('Not found');
  }
};

const fetchMovieCast = async movie_id => {
  try {
    const config = {
      url: `movie/${movie_id}/credits`,
    };
    const { data } = await axios(config, movie_id);
    return data.cast;
  } catch (error) {
    new Error('Not found');
  }
};

const fetchReviewsMovie = async movie_id => {
  try {
    const config = {
      url: `movie/${movie_id}/reviews`,
    };
    const { data } = await axios(config, movie_id);
    return data.results;
  } catch (error) {
    new Error('Not found');
  }
};

const api = {
  fetchTrendingMovieForHomepage,
  fetchMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchReviewsMovie,
};

export default api;
