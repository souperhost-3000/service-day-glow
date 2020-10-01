import React, { useState } from 'react';

// Calendar (reuseable) - formats one individual month
function Calendar({ monthName, index, monthDays }) {
  const nums = Array(42).fill(null);

  let startOfMonthIdx = 0;
  for (let i = 0; i < nums.length; i += 1) {
    // month start otherwise value = null
    if (monthName === 'October') {
      startOfMonthIdx = 4;
    }
    // button value = 1-31 (i)
    // className=monthDays[i] (t/f)
    // monthDays[i] = 1 or 0

    // key will be the identifier of the button itself (position)
    // dayNum will be displayed on the button days (date)
    let dayNum;
    if (i < startOfMonthIdx) { dayNum = ' '; }
    if (i >= startOfMonthIdx) { dayNum = i - startOfMonthIdx + 1; }
    if (i > 31 + startOfMonthIdx - 1) { dayNum = ' '; }

    let style;
    if (dayNum < 10) {
      style = {
        color: 'blue',
        'text-decoration': 'line-through',
      };
    }

    nums[i] = (
      <button className="day" style={style} type="button" key={i}>
        {dayNum}
      </button>
    );
  }

  return (
    <div className="cal-container">
      <div className="month-bar">
        {/* <button id="leftArrow" type="button">
          {'<'}
        </button> */}
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
