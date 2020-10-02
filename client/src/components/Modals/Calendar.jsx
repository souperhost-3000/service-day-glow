import React, { useState, useEffect } from 'react';

// Calendar (reuseable) - formats one individual month
function Calendar({ monthName, index, monthDays, side, setLeftCal }) {
  const nums = Array(42).fill(null);

  // selected dates
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  console.log('checkin set to :', checkIn);
  console.log('checkout set to :', checkOut);
  function handleClick(e) {
    if (checkIn === '' && checkOut === '' || checkIn !== '' && checkOut !== '') {
      setCheckOut('');
      setCheckIn(e);
    } else if (checkIn !== '' && checkOut === '') {
      setCheckOut(e);
    }
  }
  useEffect(() => {
    if (checkIn !== '') { document.getElementById(checkIn).style['background-color'] = 'purple'; }
    if (checkOut !== '') { document.getElementById(checkOut).style['background-color'] = 'green'; }
  }, [checkIn, checkOut]);

  // calendar creation (loop creates buttons for cal month)
  let startOfMonthIdx = 0;
  let monthNum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    // month starts at which index (accounts for not starting on Sunday)
    if (monthName === 'October') { startOfMonthIdx = 4; monthNum = 10; }
    if (monthName === 'November') { startOfMonthIdx = 0; monthNum = 11; }
    if (monthName === 'December') { startOfMonthIdx = 2; monthNum = 12; }
    if (monthName === 'January') { startOfMonthIdx = 5; monthNum = 1; }

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
          cursor: 'not-allowed',
          pointerEvents: 'none',
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
      <button className="day dayEffect" style={style} type="button" key={i} id={`${monthNum}/${dayNum}/20`} onClick={(e) => handleClick(e.target.id)}>
        {dayNum}
      </button>
    );
  }

  // function isSelected(date) {
  //   console.log('date in isSelected: ', date);
  //   date.style = { 'background-color': 'black' };
  // }

  return (
    <div className="cal-container">
      <div className="month-bar">
        <div>
          {side === 'cal-left' ? (
            <button className="leftButton" type="button" aria-label="left" onClick={() => (index > 0 ? setLeftCal(index - 1) : null)} />
          ) : (
            <button className="rightButton" type="button" aria-label="right" onClick={() => (index < 3 ? setLeftCal(index) : null)} />
          )}
        </div>
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
