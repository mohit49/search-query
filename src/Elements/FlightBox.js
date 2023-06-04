import React from 'react'
import * as Comp from "../components/FlightResult/FlightResultStyle";
function FlightBox({data}) {
    console.log(data)
  return (
    <>
    {data &&  
    <Comp.FlightItems>
        <Comp.FlightName>
            <h5>Lufthansa Airlines</h5>
           <p>{data.offerType}</p>
        </Comp.FlightName>
        <Comp.FlightDepDetails>
            <span>
                <b>{data.startTime}</b>
                <p>{data.originFullName}</p>
            </span>
            <span>
            <b>{data.endTime}</b>
                <p>{data.destinationFullName}</p>
            </span>
            <span>
                <b className='price'>{data.currency} {data.amount}</b>
                <p>Per traveller</p>
            </span>
        </Comp.FlightDepDetails>
        <Comp.Duration>
            <span>
                <p>Departure Date</p>
                <b>{data.depDate}</b>
            </span>
            <span>
                <p>Return Date</p>
                <b>{data.returnDate}</b>
            </span>
        </Comp.Duration>
        <Comp.BookNowButton>Book Now</Comp.BookNowButton>
    </Comp.FlightItems>
}

    </>
    
  )
}

export default FlightBox