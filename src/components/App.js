import React from "react";
import './../App.css';
import Header from './Header.js';
import MarketList from './MarketList.js'
import Produce from './Produce.js'

function App() {
  return (
    <React.Fragment>
      <Header />
      <MarketList />
      <Produce />
    </React.Fragment>
  );
}

export default App;
