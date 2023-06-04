import React,{createContext, useState }  from 'react';
import {  MainWrapper, } from './commonstyles';

import Header from './includes/Header/Header';
import FlightSearch from './components/FlightSearch/FlightSearch';
import FlightResult from './components/FlightResult/FlightResult';

export const contextData = createContext();
function App() {
  const [roundType, setRoundType] = useState('all');
  const [depLocation, setDepLocation] = useState();
  const [arrLocation, setArrLocation] = useState();
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [depDate, setDepDate] = useState(new Date());
  return (
    <contextData.Provider value={{ setRoundType, roundType, setDepLocation ,arrLocation,depLocation,  setArrLocation}}>
<Header/>

<MainWrapper>
  <FlightSearch/>
  <FlightResult/>
</MainWrapper>

</contextData.Provider>
  );
}

export default App;
