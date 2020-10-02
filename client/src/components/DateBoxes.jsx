import React, { useState, useEffect } from 'react';

// date selectors (check-in, check-out)
function DateBoxes() {
  const [text, setPlaceholder] = useState('Add date');

  const [date, setDate] = useState('');
  console.log(date);

  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.value.length === 10) {
      setDate(String(e.target.value));
    }
  }

  useEffect(() => {
    // button id === date; change css to selected color (fill input)
    console.log('date in useEffect func: ', date);
  }, [date]);

  return (
    <div>
      <div className="datePicker">
        <span className="check-in-app">
          Check-in
          <form className="date-form">
            <input className="date-input" id="check-in-input" type="text" placeholder={text} onClick={() => setPlaceholder('MM/DD/YYYY')} onChange={(e) => handleChange(e)} />
          </form>
        </span>
        <span className="check-out-app">
          Checkout
          <form className="date-form">
            <input className="date-input" id="check-out-input" type="text" placeholder={text} onClick={() => setPlaceholder('MM/DD/YYYY')} onChange={(e) => handleChange(e)} />
          </form>
        </span>
      </div>
    </div>
  );
}

export default DateBoxes;
