import React from "react";
import { Typography, Row, Col } from "antd";
import { blue } from "@ant-design/colors";

const HeaderContent = () => {
  const { Title } = Typography;

  return (
    <Row justify="center">
      <Col span={24} style={{ textAlign: "center" }}>
        <Title style={{ margin: 0, paddingTop: 24 }}>
          Hey! Check this out Movies!
        </Title>
      </Col>
    </Row>
  );
};

export default HeaderContent;
