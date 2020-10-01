/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Calendar from './Modals/Calendar';

// Calendar Container (reuseable) - formats each month of availability for listing
function CalContainer({ availability, leftCalIdx, rightCalIdx }) {
  return (
    <div className="months-container">
      {availability.map((monthObj, index) => {
        // only 2 selected months for the display (not every month in container)
        if (index === leftCalIdx || index === rightCalIdx) {
          return (
            <Calendar
              monthName={monthObj.name}
              key={monthObj.name}
              index={index}
              monthDays={monthObj.days}
            />
          );
        }
      })}
    </div>
  );
}

export default CalContainer;

// input availabilty array
// pipes to calendar (create one each)
// this is an array holding container the app can flip through 1-4
// modal and app adds logic to toggle view via index
