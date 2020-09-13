import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  function handleSellingPint(){    
    if (keg.pintsLeft > 0) {
      props.onSellingPint({pintsLeft: keg.pintsLeft - 1});
    }
    else {
      props.onSellingPint({pintsLeft: keg.pintsLeft = 0});
    }
    this.forceUpdate();
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