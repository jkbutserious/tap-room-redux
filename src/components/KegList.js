import React from "react";
import Keg from "./Keg";

const masterKegList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'  
  }
]

function KegList(){
  return (
    <React.Fragment>
      <hr/>
      {masterKegList.map((keg, index) =>
      <Keg names={keg.names}
        location={keg.location}
        issue={keg.issue}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;