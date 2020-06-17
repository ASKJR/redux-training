import React from "react";
import Card from "../../../../UI/Card";

const info = (props) => {
  const { date, age } = props.dob;
  const dob = new Date(date);
  return (
    <Card title="About me" type="info">
      Name: {props.name} <br />
      Gender: {props.gender} <br />
      DOB: {dob.toLocaleDateString()} <br />
      Age: {age} <br />
      Nationality: {props.nationality}
    </Card>
  );
};

export default info;
