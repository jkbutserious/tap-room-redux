import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  function handleSellingPint(){    
    if (keg.pintsLeft === 1 || keg.pintsLeft === "This keg is empty") {
      props.onSellingPint(keg.pintsLeft = "This keg is empty")
      // props.onSellingPint({name: keg.name, brand: keg.brand, price: keg.price, alcoholContent: keg.alcoholContent, pintsLeft: keg.pintsLeft, id: keg.id});
    }
    else {
      props.onSellingPint(keg.pintsLeft--)
      // props.onSellingPint({name: keg.name, brand: keg.brand, price: keg.price, alcoholContent: keg.alcoholContent, pintsLeft: keg.pintsLeft - 1, id: keg.id});
    }
  }
  
  return(
    <React.Fragment>
      <h3>{keg.brand} - {keg.name}</h3>
        <p>Alcohol Content: {keg.alcoholContent}</p>
        <p>Pints Left: {keg.pintsLeft}</p>
        <p><em>${keg.price}</em></p>
      <hr/>

      <button onClick={handleSellingPint}>Sell a Pint</button>

    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onSellingPint: PropTypes.func
};

export default KegDetail;