import React from "react";
import './../App.css';
import Header from './Header.js';
import MarketList from './MarketList.js'

function App() {
  return (
    <React.Fragment>
      <Header />
      <MarketList />
    </React.Fragment>
  );
}

export default App;
