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
`;
export const FlightName = styled.div`
  h5 {
    margin: 5px 0px;
    font-size: 20px;
  }
`;
export const FlightDepDetails = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    margin-top: 5px;
    b {
        font-size:20px;
        &.price {
        font-size:20px;
        }
    }
    p {
      margin: 0px;
      color:#636262;
     
    }
  }
`;
export const FlightItems = styled.div`
  width: 100%;
  padding: 10px 10px 20px 10px;
margin-bottom:10px;
  display: flex;
  background: rgb(237, 237, 243);
  flex-direction: column;
`;
export const BookNowButton =  styled.div`
display:flex;
padding:15px;
margin-top:20px;
background: rgb(99, 90, 217);
color:#ffffff;
font-weight:bold;
text-align:center;
text-align: center;
align-items: center;
justify-content: center;

`
