import styled from "styled-components";
export const FlightInputcon = styled.div`
  width: 100%;
  padding: 0;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 1024px */
    flex-direction: row;
  }
  
`;
export const FlightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 15px;
  background: url("https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/shutterstock_1412833106.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (min-width: 1024px) {
    /* For everything bigger than 1024px */
    padding: 40px 0px;
  }
`;
export const FlightTripSelection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (min-width: 1024px) {
    /* For everything bigger than 1024px */
    width: 1024px;
    margin: 0 auto;
  }
`;
export const FlightTripUl = styled.ul`
  width: 60%;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  @media only screen and (min-width: 1024px) {
    /* For everything bigger than 1024px */
    width: 200px;
  }
`;
export const FlightInputDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  @media only screen and (min-width: 1024px) {
    /* For everything bigger than 1024px */
    flex-direction: row;
    width: 1024px;
    margin: 0 auto;
  }
`;
export const FlightTripList = styled.li`
  width: 50%;
  listy-style: none;
  padding: 0;
  margin: 0;
  background: #ffffff;
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
  background: #ffffff;
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
    position: relative;
    label {
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
  margin: 0px;
  padding: 5px;
  background: #ffffff;
  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    p {
      padding: 0px 10px;
    }
  }
`;
export const Datepicker = styled.div`
  width: 100%;
  padding: 2px 10px;
  input {
    height: 30px;
    padding: 5px;
    border: none;
    margin-bottom: 5px;
    width: 100%;
  }
`;
export const SearchButtonCon = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  margin-top: 10px;
  @media only screen and (min-width: 1024px) {
    /* For everything bigger than 1024px */
    width: 200px;
    margin: 20px auto 0px auto;
  }
`;
export const SearchButton = styled.button`
  width: 100%;
  padding: 15px;

  border: none;
  background: rgb(99, 90, 217);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0px;
  
  &:hover {
    background: #5046d3;
  }
  &:disabled {
    background: gray;
  }
  @media only screen and (min-width: 1024px) {
    /* For everything bigger than 1024px */
    width: 200px;
    margin-top: 17px;
    position: absolute;
    border-radius: 30px;
  }
`;

export const SearchResultContainer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 100%;
  margin-top: 10px;

  background: #ffffff;
  z-index: 2;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
`;
export const SearchListContainer = styled.ul`
  diaply: flex;
  padding: 0;
  list-style: none;
  width: 100%;
  min-height: 100px;
  max-height: 200px;
  overflow: auto;
  margin: 0;
`;
export const SearchListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #5046d3;
    color: #ffffff;
  }
`;
