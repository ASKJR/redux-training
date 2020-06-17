import React from "react";
import { Image } from "react-bootstrap";
const avatar = (props) => {
  return <Image src={props.photo} roundedCircle alt="avatar" />;
};

export default avatar;
