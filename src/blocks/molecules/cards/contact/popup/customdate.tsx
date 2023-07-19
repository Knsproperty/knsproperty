import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

const Customdate: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(
    setHours(setMinutes(new Date(), 0), 9)
  );

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className="grid  py-2 gap-2">
      <label className="bg-lightgray  p-5 gap-1 border border-lightgreen rounded-md flex flex-row">
        <span className="text-md font-light mr-2">Select a date</span>
        <DatePicker
          className="border-2 border-lightgreen px-5 py-1 rounded-md text-sm"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          // Close the date picker when clicking outside
          showTimeSelect
          shouldCloseOnSelect={true}
          filterTime={filterPassedTime}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </label>
    </div>
  );
};

export default Customdate;
