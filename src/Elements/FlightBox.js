import React from 'react'
import * as Comp from "../components/FlightResult/FlightResultStyle";
function FlightBox() {
  return (
    <>
    <Comp.FlightItems>
        <Comp.FlightName>
            <h5>Air Asia</h5>
           
        </Comp.FlightName>
        <Comp.FlightDepDetails>
            <span>
                <b>13:30</b>
                <p>Delhi</p>
            </span>
            <span>
                <b>13:30</b>
                <p>Bengluru</p>
            </span>
            <span>
                <b className='price'>$3000</b>
                <p>Per traveller</p>
            </span>
        </Comp.FlightDepDetails>
        <Comp.BookNowButton>Book Now</Comp.BookNowButton>
    </Comp.FlightItems>
    <Comp.FlightItems>
        <Comp.FlightName>
            <h5>Air Asia</h5>
           
        </Comp.FlightName>
        <Comp.FlightDepDetails>
            <span>
                <b>13:30</b>
                <p>Delhi</p>
            </span>
            <span>
                <b>13:30</b>
                <p>Bengluru</p>
            </span>
            <span>
                <b className='price'>$3000</b>
                <p>Per traveller</p>
            </span>
        </Comp.FlightDepDetails>
        <Comp.BookNowButton>Book Now</Comp.BookNowButton>
    </Comp.FlightItems>
    <Comp.FlightItems>
        <Comp.FlightName>
            <h5>Air Asia</h5>
           
        </Comp.FlightName>
        <Comp.FlightDepDetails>
            <span>
                <b>13:30</b>
                <p>Delhi</p>
            </span>
            <span>
                <b>13:30</b>
                <p>Bengluru</p>
            </span>
            <span>
                <b className='price'>$3000</b>
                <p>Per traveller</p>
            </span>
        </Comp.FlightDepDetails>
        <Comp.BookNowButton>Book Now</Comp.BookNowButton>
    </Comp.FlightItems>

    </>
    
  )
}

export default FlightBox