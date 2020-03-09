import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import SearchForm from "../components/SearchForm";
import MoviesList from "../components/MoviesList";
import Loading from "../shared/Loading";
import { searchMoviesByQuery } from "../services/movies";

const SearchView = () => {
  const { Text } = Typography;

  const [searchResult, setSearchResult] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleQuerySubmit = (value: string) => {
    const userInput = value.trim();
    if (userInput.length > 0) {
      searchMoviesByQuery(userInput).then(response => {
        if (response.status === 200) {
          if (response.data.results.length > 0) {
            setMessage("");
            setSearchResult(response.data.results);
          } else {
            setMessage(`Sorry! No result contain keyword ${userInput}`);
          }
        } else {
          console.log("Error", response);
        }
        setIsLoading(false);
      });
    } else {
      setMessage("Invalid input text");
    }
  };

  return (
    <>
      <Row justify="center">
        <Col xs={20} span={10}>
          <SearchForm handleQuerySubmit={handleQuerySubmit} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12} style={{ textAlign: "center" }}>
          <Text type="danger">{message}</Text>
        </Col>
      </Row>
      {isLoading ? <Loading /> : <MoviesList data={searchResult} />}
    </>
  );
};

export default SearchView;
