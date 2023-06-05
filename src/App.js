import React, {useState }  from 'react';
import {  MainWrapper, } from './commonstyles';

import Header from './includes/Header/Header';
import FlightSearch from './components/FlightSearch/FlightSearch';
import FlightResult from './components/FlightResult/FlightResult';
import { DataProvider } from './contextProvider';


function App() {

  return (
 <>
<Header/>

<MainWrapper>
  <FlightSearch/>
  <FlightResult/>
</MainWrapper>
</>


  );
}

export default App;
