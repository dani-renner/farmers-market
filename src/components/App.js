import React from "react";
import './../App.css';
import Header from './Header.js';
import MarketList from './LocationList.js'
import LocationControl from './LocationControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MarketList />
      <LocationControl />
    </React.Fragment>
  );
}

export default App;
