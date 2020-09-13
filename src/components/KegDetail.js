import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  function handleSellingPint(){    
    if (keg.pintsLeft === 1 || keg.pintsLeft === "This keg is empty") {
      props.onSellingPint(keg.pintsLeft = "This keg is empty")
    }
    else {
      props.onSellingPint(keg.pintsLeft--)
    }
  }

  function handleRestockingKeg(){
    props.onRestockingKeg(keg.pintsLeft = 124)
  }
  
  return(
    <React.Fragment>
      <h3>{keg.name}</h3>
        <p>Brewery: {keg.brand}</p>
        <p>Alcohol by Volume: {keg.alcoholContent}%</p>
        <p>Pints Left: {keg.pintsLeft}</p>
        <p><em>${keg.price} per pint</em></p>
      <hr/>

      <button onClick={handleSellingPint}>Sell a Pint</button>
      <button onClick={handleRestockingKeg}>Restock this Keg</button>

    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onSellingPint: PropTypes.func
};

export default KegDetail;