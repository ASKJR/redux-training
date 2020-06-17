import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const button = (props) => {
  return (
    <Row>
      <Col xs={{ span: 3, offset: 9 }} md={{ span: 1, offset: 11 }}>
        <Button variant={props.type} onClick={props.clicked} block>
          {props.children}
        </Button>
      </Col>
    </Row>
  );
};

export default button;
