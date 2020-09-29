/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Calendar from './Calendar';

// Calendar modal (conditional pop up logic)
function CalModal({ show, setCalModal }) {
  if (!show) {
    return null;
  }
  return (
    <div className="calMod">
      <span className="selectDates">Select Dates</span>
      <div className="cal">
        <Calendar />
      </div>
      <button className="close-btn" type="button" onClick={() => setCalModal(false)}>
        Close
      </button>
    </div>
    // reusable calendar func imported
  );
}

export default CalModal;
