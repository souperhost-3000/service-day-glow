import React, { useState, useEffect } from 'react';

// date selectors (check-in, check-out)
function DateBoxes({ updateDate, checkIn, checkOut }) {
  const [text1, setPlaceholder1] = useState('Add date');
  const [text2, setPlaceholder2] = useState('Add date');

  useEffect(() => {
    if (checkIn !== '') {
      setPlaceholder1(checkIn);
    }
    if (checkOut !== '') {
      setPlaceholder2(checkOut);
    }
  }, [checkIn, checkOut]);

  function handleChange(e, check) {
    if (e.length > 9) {
      updateDate(e, check);
    }
  }

  return (
    <div>
      <div className="datePicker">
        <span className="check-in-app">
          Check-in
          <form className="date-form">
            <input
              className="date-input"
              id="check-in-input"
              type="text"
              placeholder={text1}
              onClick={() => {
                if (text1 === 'Add date') {
                  setPlaceholder1('MM/DD/YYYY');
                }
              }}
              onChange={(e) => handleChange(e.target.value, 'in')}
            />
          </form>
        </span>
        <span className="check-out-app">
          Checkout
          <form className="date-form">
            <input
              className="date-input"
              id="check-out-input"
              type="text"
              placeholder={text2}
              onClick={() => {
                if (text2 === 'Add date') {
                  setPlaceholder2('MM/DD/YYYY');
                }
              }}
              onChange={(e) => handleChange(e.target.value, 'out')}
            />
          </form>
        </span>
      </div>
    </div>
  );
}

export default DateBoxes;
