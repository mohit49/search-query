import React, { useContext, useState } from "react";
import * as Comp from "./FlightSearchStyle";
import { contextData } from "../../App";
import { DatePickerElement } from "../../Elements/Datepicker";

import Dropdown from "../../Elements/SearchInputElement";

function FlightSearch() {
 
  const { setRoundType, roundType, setDepLocation, setArrLocation, setArrivalDate, setDepDate, arrivalDate , depDate } =
    useContext(contextData);


  console.log(roundType);

const roundTypeHandler = (event) => {
  setRoundType(event.target.type)
}
  return (
    <Comp.FlightContainer>
      <Comp.FlightTripSelection>
        <Comp.FlightTripUl>
          <Comp.FlightTripList
            onClick={roundTypeHandler}
            type="best-price"
            className={roundType == "best-price" ? "active" : ""}
          >
           Best Price
          </Comp.FlightTripList>
          <Comp.FlightTripList
            onClick={roundTypeHandler}
            type="all"
            className={roundType == "all" ? "active" : ""}
          >
            All
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
            <Dropdown setLocation={setArrLocation} />
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

            <Dropdown setLocation={setDepLocation} />
          </div>
        </Comp.LocationContainer>
      </Comp.FlightInputcon>
      <Comp.DatePickContainer>
        <Comp.DatePickItem>
          <span>
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/pulsar-line/48/timeline-week.png"
              alt="timeline-week"
            />
            <p>Departure</p>
          </span>
          <Comp.Datepicker>
            <DatePickerElement
              minDate={new Date()}
              date={depDate}
              setDate={setDepDate}
            />
          </Comp.Datepicker>
        </Comp.DatePickItem>
        <Comp.DatePickItem>
          <span>
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/pulsar-line/48/timeline-week.png"
              alt="timeline-week"
            />
            <p>REturn Date</p>
          </span>
          <Comp.Datepicker>
            <DatePickerElement
              minDate={depDate}
              date={arrivalDate}
              setDate={setArrivalDate}
            />
          </Comp.Datepicker>
        </Comp.DatePickItem>
      </Comp.DatePickContainer>
      <Comp.SearchButtonCon>
        <Comp.SearchButton>Submit</Comp.SearchButton>
      </Comp.SearchButtonCon>
    </Comp.FlightContainer>
  );
}

export default FlightSearch;
