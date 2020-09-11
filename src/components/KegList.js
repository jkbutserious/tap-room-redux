import React from "react";
import Keg from "./Keg";

function KegList(){
  return (
    <Keg
      location="3A"
      names="Thato and Haley"
      issue="Firebase will not save record!"/>
    <Keg
      location="4B"
      names="Sleater and Kinney"
      issue="Prop types are throwing an error."/>
  );
}

export default KegList;