import React, { useState } from 'react';

// date selectors (check-in, check-out)
function DatePicker() {
  return (
    <div className="datePicker">
      <span className="check-in-app">Check-in </span>
      <span className="check-out-app">Checkout</span>
    </div>
  );
}

export default DatePicker;
