import React from "react";
import { Row, Col } from "react-bootstrap";
const header = (props) => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} className="text-center">
        <h1>{props.name}</h1>
      </Col>
    </Row>
  );
};

export default header;
