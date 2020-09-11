import React from "react";
import PropTypes from "prop-types";

function handleSellingPint(props){
  if (Keg.pintsLeft == 0) {
    props.onClickingSellPint({name: Keg.name, brand: Keg.brand, price: Keg.price, alcoholContent: Keg.alcoholContent, pintsLeft: Keg.pintsLeft, id: Keg.id})
  }
  else {
    props.onClickingSellPint({name: Keg.name, brand: Keg.brand, price: Keg.price, alcoholContent: Keg.alcoholContent, pintsLeft: Keg.pintsLeft - 1, id: Keg.id})
  }
}

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

      <button onClick={handleSellingPint}>Sell a Pint</button>
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
  onClickingSellPint: PropTypes.func
}

export default Keg;