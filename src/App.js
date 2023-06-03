import React,{createContext, useState }  from 'react';
import {  MainWrapper, } from './commonstyles';

import Header from './includes/Header/Header';
import FlightSearch from './components/FlightSearch/FlightSearch';
import FlightResult from './components/FlightResult/FlightResult';
if (process.env.NODE_ENV === 'development') {
  const { flightApiLocation } = require('./mocks/flightApi')
  flightApiLocation.start()
}
export const contextData = createContext();
function App() {
  const [flightType, setFlightType] = useState('one-way');
  return (
    <contextData.Provider value={{ setFlightType, flightType }}>
<Header/>
{console.log(flightType)}
<MainWrapper>
  <FlightSearch/>
  <FlightResult/>
</MainWrapper>

</contextData.Provider>
  );
}

export default App;
