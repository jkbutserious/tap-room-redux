import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Brewery: {props.brand}</p>
        <p>Alcohol by Volume: {props.alcoholContent}%</p>
        <p>Pints Left: {props.pintsLeft}</p>
        <p><em>${props.price} per pint</em></p>
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
  whenKegClicked: PropTypes.func,
}

export default Keg;