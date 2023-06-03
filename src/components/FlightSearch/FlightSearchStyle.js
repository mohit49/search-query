import styled from "styled-components";
export const FlightInputcon = styled.div`
  width: 100%;
  padding: 0;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
`;
export const FlightContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
export const FlightTripSelection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const FlightTripUl = styled.ul`
  width: 60%;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const FlightTripList = styled.li`
  width: 50%;
  listy-style: none;
  padding: 0;
  margin: 0;
  background: #efeffb;
  padding: 10px;
  text-align: center;
  color: #919192;
  font-weight: bold;
  &.active {
    background-color: #635ad9;
    color: #ffffff;
  }
`;
export const LocationContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  background: #ededf3;
  padding: 10px;
  margin-bottom: 10px;
  .locationIcon {
    width: 20%;
    &.returning-icon {
      transform: rotateY(22deg);
    }
  }
  .locationInput {
    width: 80%;
    display: flex;
    flex-direction: column;
    span {
      font-weight: bold;
      color: #6b6b6b;
    }
    input {
      border: none;
      font-size: 18px;
      margin-top: 5px;
      color: #5f5e5d;
      font-weight: bold;
      background: none;
      outline: none;
    }
  }
`;

export const DatePickContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const DatePickItem = styled.div`
  width: 50%;
  display: flex;
  height: auto;
  flex-direction: column;
  margin:0px;
  padding:5px;
  background:rgb(237, 237, 243);
  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    p {
        padding:0px 10px;
    }
  }
`;
export const Datepicker = styled.div`
width:100%;
padding:2px 10px;
 input {
    height:30px;
    padding:5px;
    border:none;
    margin-bottom:5px;
    width:100%;
 }
`
export const SearchButtonCon = styled.div`
width:100%;
padding:0;
display:flex;
margin-top:10px;
 
`
export const SearchButton = styled.button`
width:100%;
padding:15px;
border:none;
background:rgb(99, 90, 217);
color:#ffffff;
font-size:16px;
font-weight:bold;
&:hover {
    background:#5046d3;
}
 
`