import React from "react";
import Avatar from "./Avatar";
import Header from "./Header";
import Pets from "./Pets";
import Info from "./Cards/Info";
import Location from "./Cards/Location";
import Contact from "./Cards/Contact";
import { Row, Col } from "react-bootstrap";
const profile = (props) => {
  const {
    picture,
    fullName,
    gender,
    dob,
    nat,
    location,
    email,
    phone,
    cell,
  } = props.user;
  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <Avatar photo={picture.large} />
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col xs={12} className="text-center">
          <Header name={fullName} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4} xs={12} className="mb-3">
          <Info name={fullName} gender={gender} dob={dob} nationality={nat} />
        </Col>
        <Col md={4} xs={12} className="mb-3">
          <Location location={location} />
        </Col>
        <Col md={4} xs={12} className="mb-3">
          <Contact email={email} phone={phone} cell={cell} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h1>My dogs</h1>
          <Pets dogs={props.dogs} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default profile;
