import React from "react";
import { Typography, Row, Col } from "antd";

const FooterContent: React.FC = () => {
  const { Text } = Typography;

  return (
    <Row justify="center">
      <Col xs={24} sm={12} style={{ textAlign: "center" }}>
        <Text>
          Movie information from
          <a href="https://www.themoviedb.org/" target="blank">
            <img
              style={{ width: 50, margin: 10 }}
              src={process.env.PUBLIC_URL + "/TMdb.svg"}
              alt="tmdb logo"
            />
          </a>
        </Text>
      </Col>
      <Col
        xs={24}
        sm={12}
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Design and Code by Sunny Xue</Text>
      </Col>
    </Row>
  );
};

export default FooterContent;
