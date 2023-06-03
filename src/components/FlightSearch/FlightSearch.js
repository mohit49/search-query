import React, { useContext, useState } from "react";
import * as Comp from "./FlightSearchStyle";
import { contextData } from "../../App";
import { DatePickerElement } from "../../Elements/Datepicker";
function FlightSearch() {
  const { setFlightType, flightType } = useContext(contextData);
const [arrivalDate, setArrivalDate] = useState(new Date());
const [depDate, setDepDate] = useState(new Date());
console.log(arrivalDate)
  const setRoundType = (event) => {
    setFlightType(event.target.type);
  };
  return (
    <Comp.FlightContainer>
      <Comp.FlightTripSelection>
        <Comp.FlightTripUl>
          <Comp.FlightTripList
            onClick={setRoundType}
            type="one-way"
            className={flightType == "one-way" ? "active" : ""}
          >
            One-Way
          </Comp.FlightTripList>
          <Comp.FlightTripList
            onClick={setRoundType}
            type="round-trip"
            className={flightType == "round-trip" ? "active" : ""}
          >
            Round-Trip
          </Comp.FlightTripList>
        </Comp.FlightTripUl>
      </Comp.FlightTripSelection>
      <Comp.FlightInputcon>
        <Comp.LocationContainer>
          <div className="locationIcon">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/airplane-take-off.png"
              alt="airplane-take-off"
            />
          </div>
          <div className="locationInput">
            <span>From</span>
            <input type="text" placeholder="Enter location" />
          </div>
        </Comp.LocationContainer>

        <Comp.LocationContainer>
          <div className="locationIcon returning-icon">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/airplane-take-off.png"
              alt="airplane-take-off"
            />
          </div>
          <div className="locationInput">
            <span>To</span>
            <input type="text" placeholder="Enter location" />
          </div>
        </Comp.LocationContainer>
      </Comp.FlightInputcon>
      <Comp.DatePickContainer>
        <Comp.DatePickItem>
          <span> <img width="35" height="35" src="https://img.icons8.com/pulsar-line/48/timeline-week.png" alt="timeline-week"/><p>Departure</p></span>
          <Comp.Datepicker><DatePickerElement  minDate={new Date()} date={depDate} setDate={setDepDate}/></Comp.Datepicker>
        </Comp.DatePickItem>
        <Comp.DatePickItem>
       <span><img width="35" height="35" src="https://img.icons8.com/pulsar-line/48/timeline-week.png" alt="timeline-week"/> <p>Arrival</p></span>
       <Comp.Datepicker><DatePickerElement minDate={depDate} date={arrivalDate} setDate={setArrivalDate}/></Comp.Datepicker>
        </Comp.DatePickItem>
      </Comp.DatePickContainer>
      <Comp.SearchButtonCon>
        <Comp.SearchButton >Submit</Comp.SearchButton>
      </Comp.SearchButtonCon>
    </Comp.FlightContainer>
  );
}

export default FlightSearch;
