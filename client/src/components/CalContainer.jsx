/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Calendar from './Modals/Calendar';

// Calendar Container (reuseable) - formats each month of availability for listing
function CalContainer({ availability }) {
  const [leftCalIdx, setLeftCal] = useState(0);
  const [rightCalIdx, setRightCal] = useState(leftCalIdx + 1);
  // leftCalIdx, rightCalIdx

  useEffect(() => {
    setRightCal(leftCalIdx + 1);
  }, [leftCalIdx]);

  return (
    <div className="months-container">
      {availability.map((monthObj, index) => {
        // only 2 selected months for the display (not every month in container)
        if (index === leftCalIdx || index === rightCalIdx) {
          return (
            <div className={index === leftCalIdx ? 'cal-left' : 'cal-right'}>
              <Calendar
                monthName={monthObj.name}
                key={monthObj.name}
                index={index}
                monthDays={monthObj.days}
                side={index === leftCalIdx ? 'cal-left' : 'cal-right'}
                setLeftCal={setLeftCal}
                // setRightCal={setRightCal}
              />
            </div>
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
