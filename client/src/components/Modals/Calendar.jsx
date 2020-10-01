import React, { useState } from 'react';

// Calendar (reuseable) - formats one individual month
function Calendar({ monthName, index, monthDays }) {
  const nums = Array(42).fill(null);

  let startOfMonthIdx = 0;
  for (let i = 0; i < nums.length; i += 1) {
    // month starts at which index (accounts for not starting on Sunday)
    if (monthName === 'October') { startOfMonthIdx = 4; }
    if (monthName === 'November') { startOfMonthIdx = 0; }
    if (monthName === 'December') { startOfMonthIdx = 2; }
    if (monthName === 'January') { startOfMonthIdx = 5; }

    // dayNum will be displayed on the button days (date)
    let dayNum;
    let style;
    if (i < startOfMonthIdx) {
      dayNum = ' ';
      style = {
        border: 'none',
      };
    }
    if (i >= startOfMonthIdx) {
      dayNum = i - startOfMonthIdx + 1;
      // style of date number displayed will change if unavailable
      if (monthDays[dayNum - 1] === 0) {
        style = {
          color: 'blue',
          textDecoration: 'line-through',
        };
      }
    }
    if (i > 31 + startOfMonthIdx - 1) {
      dayNum = ' ';
      style = {
        border: 'none',
      };
    }

    // key will be the identifier of the button itself (position)
    nums[i] = (
      <button className="day" style={style} type="button" key={i}>
        {dayNum}
      </button>
    );
  }

  return (
    <div className="cal-container">
      <div className="month-bar">
        <button className="leftButton" type="button" aria-label="left" />
        <div className="month">
          {monthName}
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

/* availability = [
  {days: [0, 1, 0...], name: Oct},
  {days: [0, 1, 0...], name: Nov},
  {days: [0, 1, 0...], name: Dec},
  {days: [0, 1, 0...], name: Jan},
]
*/
