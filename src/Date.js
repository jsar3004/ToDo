import React from "react";
import { useState } from "react";
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
export default function(){
    const [startDate, setStartDate] = useState(new Date());
  return (
    <Datepicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeFormat="HH:mm"
      timeIntervals={1}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      placeholderText="Click to select a date"
    />
  );
}