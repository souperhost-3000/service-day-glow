/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Calendar from './Modals/Calendar';

// Calendar (reuseable)
function CalContainer({ availability }) {
  return (
    <div className="months-container">
      {
      availability.map((monthObj, index) => (
        <Calendar
          monthName={monthObj.name}
          index={index}
          monthDays={monthObj.days}
        />
      ))
      }

    </div>

  );
}

export default CalContainer;

// input availabilty array
// pipes to calendar (create one each)
// this is an array holding container the app can flip through 1-4
// modal and app adds logic to toggle view via index
