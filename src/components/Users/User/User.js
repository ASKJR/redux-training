import React from "react";
import { ListGroupItem } from "react-bootstrap";

const user = (props) => {
  return <ListGroupItem action>{props.user.fullName}</ListGroupItem>;
};

export default user;
