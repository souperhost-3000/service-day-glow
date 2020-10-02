import React, { useState, useEffect } from 'react';

// date selectors (check-in, check-out)
function DateBoxes() {
  const [text, setPlaceholder] = useState('Add date');

  const [date, setDate] = useState('');

  function handleChange(e) {
    console.log(e);
    if (e.length === 10) {
      setDate(e);
    }
  }

  useEffect(() => {
    console.log('date in useEffect func: ', date);
  }, [date]);

  return (
    <div>
      <div className="datePicker">
        <span className="check-in-app">
          Check-in
          <form className="date-form">
            <input className="date-input" id="check-in-input" type="text" placeholder={text} onClick={() => setPlaceholder('MM/DD/YYYY')} onChange={(e) => handleChange(e.target.value)} />
          </form>
        </span>
        <span className="check-out-app">
          Checkout
          <form className="date-form">
            <input className="date-input" id="check-out-input" type="text" placeholder={text} onClick={() => setPlaceholder('MM/DD/YYYY')} onChange={(e) => handleChange(e.target.value)} />
          </form>
        </span>
      </div>
    </div>
  );
}

export default DateBoxes;
