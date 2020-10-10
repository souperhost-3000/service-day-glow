/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Calendar from './Modals/Calendar';

// Calendar Container (reuseable) - formats each month of availability for listing
function CalContainer({
  availability, subHeader, adjPrice, updateDate, checkIn, checkOut,
}) {
  const [leftCalIdx, setLeftCal] = useState(0);
  const [rightCalIdx, setRightCal] = useState(leftCalIdx + 1);
  const [pricePerNight, setPricePerNight] = useState(0);

  useEffect(() => {
    setRightCal(leftCalIdx + 1);
  }, [leftCalIdx]);

  useEffect(() => {
    setPricePerNight(adjPrice);
  }, [adjPrice]);

  function selectedDates(e, check) {
    updateDate(e, check);
  }

  return (
    <div className="months-container" key="leftCalIdx">
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
                pricePerNight={pricePerNight}
                subHeader={subHeader}
                adjPrice={adjPrice}
                selectedDates={selectedDates}
                mainCheckIn={checkIn}
                mainCheckOut={checkOut}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default CalContainer;
