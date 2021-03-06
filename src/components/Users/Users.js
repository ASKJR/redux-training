import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import User from "./User/User";
import { Link } from "react-router-dom";
const users = (props) => {
  const users = props.users.map((u, indx) => {
    return (
      <Link
        to={`/user/${u.login.uuid}`}
        key={u.login.uuid}
        style={{ textDecoration: "none" }}
      >
        <User user={u} seq={indx + 1} />
      </Link>
    );
  });

  return (
    <React.Fragment>
      <h1>
        {props.title} ({props.users.length})
      </h1>
      <Row>
        <Col xs={12}>
          <ListGroup>{users}</ListGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default users;
