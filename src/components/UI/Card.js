import React from "react";
import { Card } from "react-bootstrap";
import { MdAccountCircle, MdLocationOn, MdPhoneInTalk } from "react-icons/md";

const card = (props) => {
  let icon = null;
  switch (props.type) {
    case "info":
      icon = <MdAccountCircle />;
      break;
    case "location":
      icon = <MdLocationOn />;
      break;
    case "contact":
      icon = <MdPhoneInTalk />;
      break;
    default:
      break;
  }
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>
          {props.title} {icon}
        </Card.Title>
        {props.children}
      </Card.Body>
    </Card>
  );
};

export default card;
