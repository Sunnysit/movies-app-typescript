import React from "react";
import { Typography, Row, Col } from "antd";

const HeaderContent: React.FC = () => {
  const { Title } = Typography;

  return (
    <Row justify="center">
      <Col span={24} style={{ textAlign: "center" }}>
        <Title style={{ margin: 0, paddingTop: 24 }}>
          Hey! Check out those Movies!
        </Title>
      </Col>
    </Row>
  );
};

export default HeaderContent;
