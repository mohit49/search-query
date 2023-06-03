import React from "react";
import FlightBox from "../../Elements/FlightBox";
import * as Comp from "./FlightResultStyle";
function FlightResult() {
  return (
    <>
      <Comp.FlightBocContainer>
        <p>20 results found</p>
        <FlightBox />
      </Comp.FlightBocContainer>
    </>
  );
}

export default FlightResult;
