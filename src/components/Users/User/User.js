import React from "react";
import { ListGroupItem } from "react-bootstrap";

const user = (props) => {
  const { first, last } = props.user.name;
  const fullName = `${first} ${last}`;
  return <ListGroupItem action>{fullName}</ListGroupItem>;
};

export default user;
