import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const button = (props) => {
  return (
    <Row>
      <Col xs={{ span: 2, offset: 10 }} md={{ span: 1, offset: 11 }}>
        <Button variant={props.type} onClick={props.clicked} block>
          {props.children}
        </Button>
      </Col>
    </Row>
  );
};

export default button;
