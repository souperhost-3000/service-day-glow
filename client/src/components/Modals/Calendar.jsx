/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// Calendar (reuseable)
function Calendar() {
  const nums = Array(42).fill(null);
  for (let i = 0; i < nums.length; i += 1) {
    nums[i] = <button className="day" type="button" key={i}>{i}</button>;
  }
  console.log(nums);

  return (
    <div className="cal-container">
      <div className="month-bar">
        {/* <button id="leftArrow" type="button">
          {'<'}
        </button> */}
        <div className="month">
          Month Name
        </div>
      </div>
      <div className="cal-container">
        <div className="weekdays">
          <button className="cal-day" type="button">Su</button>
          <button className="cal-day" type="button">Mo</button>
          <button className="cal-day" type="button">Tu</button>
          <button className="cal-day" type="button">We</button>
          <button className="cal-day" type="button">Th</button>
          <button className="cal-day" type="button">Fr</button>
          <button className="cal-day" type="button">Sa</button>
        </div>
        <div className="days-container">
          {nums}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
