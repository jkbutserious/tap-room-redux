import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from"./KegList";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';

class KegControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleReducingPintsLeft = () => {
    this.forceUpdate();
  }

  handleRefillingPintsLeft = () => {
    this.forceUpdate();
  }

  handleChangeingSelectedKeg =  (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    }
    else {
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onSellingPint={this.handleReducingPintsLeft} onRestockingKeg={this.handleRefillingPintsLeft} />
      buttonText = "Return to Keg List"
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    }
    else {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList} onKegSelection={this.handleChangeingSelectedKeg} />
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

KegControl = connect()(KegControl);

export default KegControl;