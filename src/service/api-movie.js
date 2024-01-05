import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'abbbf5b15f9d300c822433e36ad8b1aa';

export const fetchAllTrend = async () => {
  return (await axios.get(`trending/movie/day?api_key=${API_KEY}`)).data;
};

export const searchQuery = async query => {
  return (
    await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
    )
  ).data;
};

export const movieDetails = async id => {
  return (await axios.get(`movie/${id}?api_key=${API_KEY}`)).data;
};

export const movieCredits = async id => {
  return (await axios.get(`movie/${id}/credits?api_key=${API_KEY}`)).data;
};

export const movieReviews = async id => {
  return (await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`)).data;
};
