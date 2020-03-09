import React, { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList";
import Loading from "../shared/Loading";
import CategoryRadio from "../components/CategoryRadio";
import { MovieItemList } from "../config/typeInterface";
import { getMoviesByCategory, searchMoviesByQuery } from "../services/movies";
import { RadioChangeEvent } from "antd/lib/radio/interface";

const MainContent = () => {
  const [movies, setMovies] = useState<MovieItemList>([]);
  const [selectCategory, setSelectCategory] = useState("now_playing");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMoviesByCategory(selectCategory).then(response => {
      console.log(response);
      response.status === 200
        ? setMovies(response.data.results)
        : console.log("Error", response);

      setIsLoading(false);
    });
  }, [selectCategory]);

  const handleCategoryChange = (e: RadioChangeEvent) => {
    setSelectCategory(e.target.value);
  };

  return (
    <div style={{ maxWidth: 1000, margin: "2rem auto" }}>
      <CategoryRadio handleCategoryChange={handleCategoryChange} />
      {isLoading ? <Loading /> : <MoviesList data={movies} />}
    </div>
  );
};

export default MainContent;
