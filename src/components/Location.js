import React from "react";
import PropTypes from "prop-types";
import { Card } from 'react-bootstrap';

function Location(props){
  const cardDetails = `<h4>{props.location}</h4>
  <h4>{props.hours}</h4>
  <h4>{props.booth}</h4>`
  return (
    <Card>
      <Card.Title style={{display: 'flex', flexDirection: 'row'}}>
        <h3>{props.day}</h3>
      </Card.Title>
      <Card.Body>
        {props.selectedDate ?  cardDetails : null}
      </Card.Body>
    </Card>
  );
}
Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Location;