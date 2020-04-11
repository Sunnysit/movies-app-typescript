import axios from 'axios';
import { MOVIE_BASE_URL, MOVIE_API } from '../config/movie_api';

export const getMoviesByCategory = async (
  category: string = 'now_playing',
  language: string = 'en'
) => {
  const response = await axios.get(
    `${MOVIE_BASE_URL}/movie/${category}?api_key=${MOVIE_API}&language=${language}`
  );

  return response;
};

export const searchMoviesByQuery = async (
  query: string,
  language: string = 'en'
) => {
  const response = await axios.get(
    `${MOVIE_BASE_URL}/search/movie?query=${query}&api_key=${MOVIE_API}&language=${language}`
  );

  return response;
};
