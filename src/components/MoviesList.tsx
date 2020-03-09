import React from "react";
import { Row } from "antd";
import { MovieItemListProps, MovieItem } from "../config/typeInterface";
import MovieCard from "./MovieCard";

const MoviesList: React.FC<MovieItemListProps> = ({ data }) => {
  const renderMovieList = data.map((movie: MovieItem) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return <Row>{renderMovieList}</Row>;
};

export default MoviesList;
