import React ,{ useState }from "react";

export const contextData = React.createContext();
export const DataProvider =  ({children}) =>{
    const [roundType, setRoundType] = useState('all');
    const [depLocation, setDepLocation] = useState();
    const [arrLocation, setArrLocation] = useState();
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [depDate, setDepDate] = useState(new Date());
    const [searchButtonAction, setSearchButtonAction] = useState(false);
    return <contextData.Provider value={{setDepDate, setArrivalDate, setSearchButtonAction, searchButtonAction, arrivalDate,   depDate,  setRoundType, roundType, setDepLocation ,arrLocation,depLocation,  setArrLocation}}>{children}</contextData.Provider>
}

export const useContextData = () => React.useContext(contextData)