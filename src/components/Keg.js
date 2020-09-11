import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.brand} - {props.name}</h3>
      <p>Alcohol Content: {props.alcoholContent}</p>
      <p>Pints Left: {props.pintsLeft}</p>
      <p><em>${props.price}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintsLeft: PropTypes.number,
  id: PropTypes.string
}

export default Keg;