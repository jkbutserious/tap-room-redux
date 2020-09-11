import React from "react";
import {v4} from "uuid";

function NewKegForm(props){

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }
  return (
    <React.Fragment>
    <form onSubmit={handleNewKegFormSubmission}>
    <input
      type='text'
      name='names'
      placeholder='Pair Names' />
    <input
      type='text'
      name='location'
      placeholder='Location' />
    <textarea
      name='issue'
      placeholder='Describe your issue.' />
    <button type='submit'>Help!</button>
  </form>    </React.Fragment>
  );
}

export default NewKegForm;