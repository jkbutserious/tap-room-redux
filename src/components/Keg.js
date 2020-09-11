import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <p>Alcohol Content: {props.alcoholContent}</p>
        <p>Pints Left: {props.pintsLeft}</p>
        <p><em>${props.price}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;