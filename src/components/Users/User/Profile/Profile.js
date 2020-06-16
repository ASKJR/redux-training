import React from "react";
import Avatar from "./Avatar";
import Header from "./Header";
const profile = (props) => {
  const { picture, fullName } = props.user;
  return (
    <React.Fragment>
      <Avatar photo={picture.large} />
      <Header name={fullName} />
    </React.Fragment>
  );
};

export default profile;
