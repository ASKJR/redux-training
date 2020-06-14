import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import User from "./User/User";
const users = (props) => {
  const users = props.users.map((u, i) => {
    return <User user={u} key={i} />;
  });

  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <Row>
        <Col xs={12}>
          <ListGroup>{users}</ListGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default users;
