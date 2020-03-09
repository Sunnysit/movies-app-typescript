import React from "react";
import { Rate, Row, Col, Card, Typography, Popover } from "antd";
import { StarTwoTone, BookTwoTone, CalendarTwoTone } from "@ant-design/icons";
import { MovieItemProps } from "../config/typeInterface";

const MovieCard = ({ movie }: MovieItemProps) => {
  const { Meta } = Card;
  const { Paragraph, Text } = Typography;

  const content = (
    <Row style={{ width: 400, maxWidth: "85vw" }}>
      <Col span={24}>
        <Text type="secondary">
          <StarTwoTone /> &nbsp;Score
        </Text>
        <br />
        <>
          <Rate disabled defaultValue={movie.vote_average / 2} />
          <Text>&nbsp;{movie.vote_average}</Text>
        </>
      </Col>
      <Col span={24}>
        <Text type="secondary">
          <CalendarTwoTone /> &nbsp;Release Date
        </Text>
        <Paragraph>{movie.release_date}</Paragraph>
      </Col>
      <Col span={24}>
        <Text type="secondary">
          <BookTwoTone />
          &nbsp;Overview
        </Text>
        <Paragraph>{movie.overview}</Paragraph>
      </Col>
    </Row>
  );

  return (
    <Col flex={1}>
      <Popover trigger="click" placement="right" content={content}>
        <Card
          hoverable
          style={{ width: 240, margin: "0 auto 1rem" }}
          cover={
            movie.poster_path && (
              <img
                alt={movie.title + " poster"}
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              />
            )
          }
        >
          <Meta
            style={{ textAlign: "center" }}
            title={movie.title}
            description={!movie.poster_path && movie.overview}
          />
        </Card>
      </Popover>
    </Col>
  );
};

export default MovieCard;
