import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  
  return(
    <React.Fragment>
      <h3>{keg.brand} - {keg.name}</h3>
        <p>Alcohol Content: {keg.alcoholContent}</p>
        <p>Pints Left: {keg.pintsLeft}</p>
        <p><em>${keg.price}</em></p>
      <hr/>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;