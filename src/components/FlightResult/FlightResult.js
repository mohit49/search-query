import React, { useEffect, useState } from "react";
import FlightBox from "../../Elements/FlightBox";
import * as Comp from "./FlightResultStyle";
import Service from "../../api";
import { useContextData } from "../../contextProvider";
function FlightResult() {
  const [result, setResult] = useState();
  const {
    roundType,
    arrivalDate,
    depDate,
    depLocation,
    arrLocation, searchButtonAction
  } = useContextData();
  const service = new Service();
  useEffect(() => {
    if(arrivalDate  && depDate && depLocation?.length > 0 && arrLocation?.length > 0 && roundType?.length > 0) {
      const formatReturnDate = arrivalDate.toISOString().slice(0, 10);
      const formatDepDate = depDate.toISOString().slice(0, 10);
      service
      .get(
        `promotions/priceoffers/flights/ond/?depLoc=${depLocation}&arrLoc=${arrLocation}&depDate=${formatDepDate}&returnDate=${formatReturnDate}${roundType === 'best-price' ? '&type=best-price':''}`
      )
      .then((res) => {
        setResult(res);
      });
    }
   
  }, [roundType , searchButtonAction]);
  return (
    <>
      <Comp.FlightBocContainer data-testid='flightResultTest'>
       {result?.items?.length > 0 && <p> {result?.items?.length} results found</p>}
        {result?.items?.length > 0 && result.items.map((ele, index) => (
          <FlightBox key={index} data={ele}/>
        ))}
      </Comp.FlightBocContainer>
    </>
  );
}

export default FlightResult;
