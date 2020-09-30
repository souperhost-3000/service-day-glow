import React, { useState } from 'react';
import Calendar from './Calendar';

// Calendar modal (conditional pop up logic)
function CalModal({ show, setCalModal }) {
  if (!show) {
    return null;
  }
  return (
    <div className="bob">
      <div className="selectDates">
        Select Dates
        <br />
        <span className="listing_rooms">Entire house . 2 bds . 1 bath</span>
      </div>
      <div className="cal-dbl-container">
        <div className="cal-left">
          <Calendar />
        </div>
        <div className="cal-right">
          <Calendar />
        </div>
      </div>
      <div className="actions">
        <button className="close-btn" type="button" onClick={() => setCalModal(false)}>
          Close
        </button>
        <button className="clear-btn" type="button">Clear date</button>
      </div>
    </div>
    // reusable calendar func imported
  );
}

export default CalModal;
