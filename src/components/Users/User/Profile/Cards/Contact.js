import React from "react";
import Card from "../../../../UI/Card";

const contact = (props) => {
  return (
    <Card title="Contact" type="contact">
      E-mail: {props.email} <br />
      Phone: {props.phone} <br />
      Cell: {props.cell} <br />
    </Card>
  );
};

export default contact;
