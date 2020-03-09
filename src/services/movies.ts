import axios from "axios";
import { MOVIE_BASE_URL, MOVIE_API } from "../config/movie_api";

export const getMoviesByCategory = async (category: string = "now_playing") => {
  const response = await axios.get(
    `${MOVIE_BASE_URL}/movie/${category}?api_key=${MOVIE_API}`
  );

  return response;
};

export const searchMoviesByQuery = async (query: string) => {
  const response = await axios.get(
    `${MOVIE_BASE_URL}/search/movie?query=${query}&api_key=${MOVIE_API}`
  );

  return response;
};
