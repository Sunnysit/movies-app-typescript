import React from "react";
import { Statistic, Row, Col, Card, Typography, Popover } from "antd";
import { StarTwoTone, BookTwoTone, CalendarTwoTone } from "@ant-design/icons";
import { MovieItemProps } from "../config/typeInterface";

const MovieCard = ({ movie }: MovieItemProps) => {
  const { Meta } = Card;
  const { Paragraph, Text } = Typography;

  const content = (
    <Row style={{ width: 400 }}>
      <Col span={24}>
        <Statistic
          title={
            <>
              <StarTwoTone /> Score
            </>
          }
          value={movie.vote_average}
          suffix="/ 10"
        />
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
      <Popover style={{ width: 400 }} placement="right" content={content}>
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
          <Meta style={{ textAlign: "center" }} title={movie.title} />
        </Card>
      </Popover>
    </Col>
  );
};

export default MovieCard;
