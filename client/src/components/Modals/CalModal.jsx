import React, { useState } from 'react';
import Calendar from './Calendar';
import DateBoxes from '../DateBoxes';

// Calendar modal (conditional pop up logic)
function CalModal({ show, setCalModal }) {
  if (!show) {
    return null;
  }
  return (
    <div className="bob">
      <div className="modal-header">
        <div className="modal-header-left">
          <div className="selectDates">
            Select Dates
          </div>
          <span className="listing_rooms">Entire house . 2 bds . 1 bath</span>
        </div>
        <div className="modal-dateBoxes">
          <DateBoxes />
        </div>
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
        <div className="taxesWarning">
          Prices on calendar do not include taxes and fees
        </div>
        <button className="close-btn" type="button" onClick={() => setCalModal(false)}>
          Close
        </button>
        <button className="clear-btn" type="button">Clear date</button>
      </div>
    </div>
  );
}

export default CalModal;