import React, { useState, useEffect } from 'react';

// date selectors (check-in, check-out)
function DateBoxes() {
  const [text, setPlaceholder] = useState('Add date');

  const [date, setDate] = useState('');

  useEffect(() => {
    console.log('date in useEffect func: ', date);
  }, [date]);

  // function onChange(e, check) {
  //   console.log('you made a change to your input: ', e);
  //   if (e.length > 9) {
  //     handleInput(e, check);
  //   }
  // }

  return (
    <div>
      <div className="datePicker">
        <span className="check-in-app">
          Check-in
          <form className="date-form">
            <input className="date-input" id="check-in-input" type="text" placeholder={text} onClick={() => setPlaceholder('MM/DD/YYYY')} onChange={(e) => setDate(e.target.value, 'in')} />
          </form>
        </span>
        <span className="check-out-app">
          Checkout
          <form className="date-form">
            <input className="date-input" id="check-out-input" type="text" placeholder={text} onClick={() => setPlaceholder('MM/DD/YYYY')} onChange={(e) => setDate(e.target.value, 'out')} />
          </form>
        </span>
      </div>
    </div>
  );
}

export default DateBoxes;
