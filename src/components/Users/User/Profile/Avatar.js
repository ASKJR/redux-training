import React from "react";
import { Row, Col, Image } from "react-bootstrap";
const avatar = (props) => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} className="text-center">
        <Image src={props.photo} roundedCircle alt="avatar" />
      </Col>
    </Row>
  );
};

export default avatar;
