import React from "react";
import { Typography, Row, Col } from "antd";

const FooterContent = () => {
  const { Text } = Typography;

  return (
    <Row justify="center">
      <Col span={12} style={{ textAlign: "center" }}>
        <Text>Design and Code by Sunny Xue</Text>
      </Col>
    </Row>
  );
};

export default FooterContent;
