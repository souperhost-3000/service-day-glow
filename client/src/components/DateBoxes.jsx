import React from 'react';

// date selectors (check-in, check-out)
function DateBoxes() {
  return (
    <div>
      <div className="datePicker">
        <span className="check-in-app">
          Check-in
          <form className="date-form">
            <input className="date-input" id="check-in-input" type="text" placeholder="Add date" />
          </form>
        </span>
        <span className="check-out-app">
          Checkout
          <form className="date-form">
            <input className="date-input" id="check-out-input" type="text" placeholder="Add date" />
          </form>
        </span>
      </div>
    </div>
  );
}

export default DateBoxes;
