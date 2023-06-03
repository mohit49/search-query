import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerElement = ({date, setDate, minDate}) => {
  
 
  return (
    <>
   {date && <DatePicker minDate={minDate} selected={date} onChange={(date) => setDate(date)} />}
    </>
  );
};