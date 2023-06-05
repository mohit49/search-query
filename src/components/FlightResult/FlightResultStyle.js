import styled from "styled-components";

export const FlightBocContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  p {
    font-weight: bold;
  }
  .no-result {
    margin:100px auto;
    position; relative;
    font-size:20px;
    text-align:center;
  }
  @media only screen and (min-width: 1024px) {
    /* For everything bigger than 1024px */
    width: 1024px;
    margin:0 auto;
   
  }
`;
export const FlightName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h5 {
    margin: 5px 0px;
    font-size: 20px;
  }
  p {
    padding:5px 15px;
    background:green;
    color:#ffffff;
    margin:0;
  }
`;
export const FlightDepDetails = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    margin-top: 5px;
    b {
      font-size: 20px;
      &.price {
        font-size: 20px;
      }
    }
    p {
      margin: 0px;
      color: #636262;
    }
  }
`;
export const FlightItems = styled.div`
  width: 100%;
  padding: 10px 10px 20px 10px;
  margin-bottom: 10px;
  display: flex;

  flex-direction: column;
  background:#ffffff;
  @media only screen and (min-width: 1024px) {
    /* For everything bigger than 1024px */
padding:10px 15px;
   
  }
`;
export const BookNowButton = styled.div`
  display: flex;
  padding: 15px;
  margin-top: 10px;
  background: rgb(99, 90, 217);
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    /* For everything bigger than 1024px */
    width: 200px;
    align-self: end;
    
   
  }
`;
export const Duration = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
border-top:1px #cccccc solid;
margin:10px 0px;
p {
  margin:5px 0px;
}
`
