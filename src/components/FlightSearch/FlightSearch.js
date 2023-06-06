import React, { useEffect, useState } from "react";
import * as Comp from "./FlightSearchStyle";
import { useContextData } from "../../contextProvider";
import { DatePickerElement } from "../../Elements/Datepicker";

import Dropdown from "../../Elements/SearchInputElement";

function FlightSearch() {
  const [disabled, setDisabled] = useState(true);
  const {
    roundType,
    arrivalDate,
    depDate,
    depLocation,
    arrLocation, searchButtonAction,setRoundType,setSearchButtonAction,setArrLocation,setDepLocation,setDepDate,setArrivalDate
  } = useContextData();

  console.log(roundType);

  const roundTypeHandler = (event) => {
    setRoundType(event.target.type);
  };

  const handleForm = () => {
    setSearchButtonAction(!searchButtonAction);
  };
  useEffect(() => {
    if (
      (depDate, arrivalDate, arrLocation?.length > 0, depLocation?.length > 0)
    ) {
      setDisabled(false)
    }
  }, [depDate, arrivalDate, arrLocation, depLocation]);
  return (
    <Comp.FlightContainer data-testid='flightSearchTest'>
      <Comp.FlightTripSelection>
        <Comp.FlightTripUl>
          <Comp.FlightTripList
            onClick={roundTypeHandler}
            type="best-price"
            className={roundType === "best-price" ? "active" : ""}
          >
            Best Price
          </Comp.FlightTripList>
          <Comp.FlightTripList
            onClick={roundTypeHandler}
            type="all"
            className={roundType === "all" ? "active" : ""}
          >
            All
          </Comp.FlightTripList>
        </Comp.FlightTripUl>
      </Comp.FlightTripSelection>
      <Comp.FlightInputDate>
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
            <label>From</label>
            <Dropdown labelText='Enter Departure location' setLocation={setArrLocation} />
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
            <label>To</label>

            <Dropdown setLocation={setDepLocation}  labelText='Enter Return location'/>
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
            <DatePickerElement  data-testid='Departure'
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
            <p>Return Date</p>
          </span>
          <Comp.Datepicker>
            <DatePickerElement  data-testid='ReturnDate'
              minDate={depDate}
              date={arrivalDate}
              setDate={setArrivalDate}
            />
          </Comp.Datepicker>
        </Comp.DatePickItem>
      </Comp.DatePickContainer>
      </Comp.FlightInputDate>
      <Comp.SearchButtonCon>
        <Comp.SearchButton disabled={disabled} onClick={handleForm}>
          Submit
        </Comp.SearchButton>
      </Comp.SearchButtonCon>
    </Comp.FlightContainer>
  );
}

export default FlightSearch;
