import React from "react";
import { Col, Card } from "antd";
import { MovieItemProps } from "../config/typeInterface";

const MovieCard = ({ movie }: MovieItemProps) => {
  const { Meta } = Card;

  return (
    <Col flex={1}>
      <Card
        hoverable
        style={{ width: 240, margin: "0 auto 1rem" }}
        cover={
          <img
            alt={movie.title + " poster"}
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          />
        }
      >
        <Meta style={{ textAlign: "center" }} title={movie.title}></Meta>
      </Card>
    </Col>
  );
};

export default MovieCard;
