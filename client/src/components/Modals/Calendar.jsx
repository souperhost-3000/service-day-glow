import React, { useState, useEffect } from 'react';

// Calendar (reuseable) - formats one individual month
function Calendar({
  monthName, index, monthDays, side, setLeftCal, pricePerNight,
  selectedDates, mainCheckIn, mainCheckOut,
}) {
  const nums = Array(42).fill(null);

  // selected dates
  const [checkIn, setCheckIn] = useState('');
  const [prevCI, setCI] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [prevCO, setCO] = useState('');

  // calendar day is clicked, will set respective checkin and checkout dates
  function handleClick(e) {
    if ((checkIn === '' && checkOut === '') || (checkIn !== '' && checkOut !== '')) {
      selectedDates(e, 'in');
      setCheckOut('');
      setCheckIn(e);
    } else if (checkIn !== '' && checkOut === '') {
      selectedDates(e, 'out');
      setCheckOut(e);
    }
  }
  // if datePicker input form is filled, will update calendar dates to show selection
  useEffect(() => {
    if ((mainCheckIn !== '' && mainCheckOut !== '') && (mainCheckIn !== undefined && mainCheckOut !== undefined)) {
      setCheckIn(mainCheckIn);
      setCheckOut(mainCheckOut);
    }
  }, [mainCheckIn, mainCheckOut]);

  // transform selected checkIn and Out dates css
  useEffect(() => {
    if (checkIn !== '') {
      if (prevCI !== '') {
        document.getElementById(prevCI).style['background-color'] = 'transparent';
        document.getElementById(prevCI).style.color = 'black';
      }
      const ci = document.getElementById(checkIn).style;
      ci['background-color'] = 'black';
      ci['border-radius'] = '100%';
      ci.border = '3px double white';
      ci.color = 'white';
      ci.height = '35px';
      ci.width = '35px';
      setCI(checkIn);
    }
    if (checkOut !== '') {
      if (prevCO !== '') {
        document.getElementById(prevCO).style['background-color'] = 'transparent';
        document.getElementById(prevCO).style.color = 'black';
      }
      const co = document.getElementById(checkOut).style;
      co['background-color'] = 'black';
      co['border-radius'] = '100%';
      co.color = 'white';
      setCO(checkOut);
    }
  }, [checkIn, prevCI, checkOut, prevCO]);

  // calendar creation (loop creates buttons for cal month)
  let startOfMonthIdx = 0;
  let monthNum = 0;
  let yearNum = 2020;
  for (let i = 0; i < nums.length; i += 1) {
    // month starts at which index (accounts for not starting on Sunday)
    if (monthName === 'October') { startOfMonthIdx = 4; monthNum = 10; }
    if (monthName === 'November') { startOfMonthIdx = 0; monthNum = 11; }
    if (monthName === 'December') { startOfMonthIdx = 2; monthNum = 12; }
    if (monthName === 'January') { startOfMonthIdx = 5; monthNum = '01'; yearNum = 2021; }

    // dayNum will be displayed on the button days (date)
    let dayNum;
    let style = {};
    if (i < startOfMonthIdx) {
      dayNum = ' ';
      style = {
        border: 'none',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      };
    }
    if (i >= startOfMonthIdx) {
      dayNum = i - startOfMonthIdx + 1;
      // style of date number displayed will change if unavailable
      if (monthDays[dayNum - 1] === 0) {
        style = {
          color: '#cacccdcb',
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
        cursor: 'not-allowed',
        pointerEvents: 'none',
      };
    }

    // key will be the identifier of the button itself (position)
    nums[i] = (
      <button className="day" style={style} type="button" key={i} id={`${monthNum}/${dayNum < 10 ? (`0${dayNum}`) : dayNum}/${yearNum}`} onClick={(e) => handleClick(e.target.id)}>
        <span className="line-day" style={style}>{`${dayNum}`}</span>
        <span className="line-price">{(monthDays[dayNum - 1] === 0 || dayNum === ' ') ? ' ' : `$${pricePerNight === undefined ? '' : pricePerNight}`}</span>
      </button>
    );
  }

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
