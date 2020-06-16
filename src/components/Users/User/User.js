import React from "react";
import { ListGroupItem } from "react-bootstrap";

const user = (props) => {
  return (
    <ListGroupItem action>
      <h5>
        #{props.seq} {props.user.fullName}
      </h5>
    </ListGroupItem>
  );
};

export default user;
