import React, { useEffect, useContext, useState } from "react";
import FlightBox from "../../Elements/FlightBox";
import * as Comp from "./FlightResultStyle";
import Service from "../../api";
import { contextData } from "../../App";
function FlightResult() {
  const [result, setResult] = useState();
  const {
    roundType,
    arrivalDate,
    depDate,
    depLocation,
    arrLocation
  } = useContext(contextData);
  const service = new Service();
  useEffect(() => {
    service
      .get(
        `promotions/priceoffers/flights/ond/?depLoc=${depLocation}&arrLoc=${arrLocation}&depDate=2023-06-13&returnDate=2023-06-20`
      )
      .then((res) => {
        setResult(res);
      });
  }, [roundType,arrivalDate, depDate, depLocation, arrLocation ]);
  return (
    <>
      <Comp.FlightBocContainer>
       {result?.items?.length > 0 && <p> {result?.items?.length} results found</p>}
        {result?.items?.length > 0 && result.items.map((ele, index) => (
          <FlightBox key={index} data={ele}/>
        ))}
      </Comp.FlightBocContainer>
    </>
  );
}

export default FlightResult;
