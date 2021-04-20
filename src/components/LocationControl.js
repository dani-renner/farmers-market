import React from "react";
//import MarketList from "./LocationList";
import Location from './Location';
import { Card } from 'react-bootstrap'

class LocationControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detailsVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      detailsVisibleOnPage: !prevState.detailsVisibleOnPage
    }));
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.detailsVisibleOnPage)
    {
      currentlyVisibleState = <Location/>
      buttonText = "Hide Details"
    } else {
      currentlyVisibleState = <Location />
      buttonText = "See Details"
    }
    return (
        {currentlyVisibleState},
        <button onClick={this.handleClick}>{buttonText}</button>
    )
  }
}

export default LocationControl;




