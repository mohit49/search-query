import React, { useEffect, useState, useCallback } from "react";
import * as Comp from "../components/FlightSearch/FlightSearchStyle";
import Service from "../api";
const debounce = (func, wait) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
function Dropdown({ setLocation , labelText }) {
  const service = new Service();
  const [input, setInput] = useState();
  const [searchResult, setSearchResult] = useState();
  const [showDropDown, setShowDropDown] = useState(false);
  const handleSearch = useCallback(
    debounce((inputVal) => fetchNameResults(inputVal), 500),
    []
  );
  const handleInputChange = (e) => {
    setInput(e.target.value);

    handleSearch(e.target.value);
  };
  const inputHandler = (event) => {
    setInput(event.target.value);

    handleInputChange(event);
  };

  const fetchNameResults = (inputVal) => {
    if (inputVal.length > 2) {
      service.get(`flightApiSearch?query=${inputVal}`).then((res) => {
        setSearchResult(res);
        setShowDropDown(true);
      });
    } else {
      setShowDropDown(false);
    }
  };
  return (
    <>
      <input
        aria-label={labelText}
        aria-required="true"
        type="text"
        onChange={inputHandler}
        value={input}
        placeholder={labelText}
      />
      {searchResult?.items?.length > 0 && showDropDown && (
        <Comp.SearchResultContainer>
          <Comp.SearchListContainer>
            {searchResult?.items.map((ele, index) => (
              <Comp.SearchListItem
                key={index}
                onClick={(e) => {setShowDropDown(false); setLocation(ele.code); setInput(ele.airport)}}
              >
                {ele.airport}
              </Comp.SearchListItem>
            ))}
          </Comp.SearchListContainer>
        </Comp.SearchResultContainer>
      )}
    </>
  );
}

export default Dropdown;
