import React from "react";
import Card from "../../../../UI/Card";

const location = (props) => {
  const { street, city, state, country, postcode } = props.location;
  const { number, name } = street;
  return (
    <Card title="Location" type="location">
      Street: {name.trim()}, {number} <br />
      City: {city} <br />
      State: {state} <br />
      Country: {country} <br />
      ZIP code: {postcode} <br />
    </Card>
  );
};

export default location;
