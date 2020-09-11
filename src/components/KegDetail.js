import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  
  return(
    <React.Fragment>
      <h3>{props.brand} - {props.name}</h3>
        <p>Alcohol Content: {props.alcoholContent}</p>
        <p>Pints Left: {props.pintsLeft}</p>
        <p><em>${props.price}</em></p>
      <hr/>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default TicketDetail;