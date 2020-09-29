import React, { useState } from 'react';
import Calendar from './Calendar';

// Calendar modal (conditional pop up logic)
function CalModal({ show, setCalModal }) {
  if (!show) {
    return null;
  }
  return (
    <div className="bob">
      <span className="selectDates">Select Dates</span>
      <div className="cal">
        <Calendar />
      </div>
      <div className="actions">
        <button className="clear-btn" type="button">clear date</button>
        <button className="close-btn" type="button" onClick={() => setCalModal(false)}>
          Close
        </button>
      </div>
    </div>
    // reusable calendar func imported
  );
}

export default CalModal;
