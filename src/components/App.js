import React from "react";
import './../App.css';
import Header from './Header.js';
import MarketList from './MarketList.js'
import Produce from './Produce.js'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function App() {
  return (
    <MDBContainer>
      <Header />
      <MDBRow>
        <MDBCol><MarketList /></MDBCol>
        <MDBCol><Produce /></MDBCol>
      </MDBRow>    
    </MDBContainer>
  );
}

export default App;
