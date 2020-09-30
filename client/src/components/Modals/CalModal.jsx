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

// listing_rooms class (show be renamed sub-info for calendar/dates)
/* includes:

listing_details: "Entire cabin2 - beds1 - bath"
Minimum checkout date: "Minimum stay: 3 nights", "Minimum stay: 2 nights"
Dates Picked: "Jan 24, 2021 - Jan 27, 2021"
Closest date avail in displayed month range: "The closest available check-in date is Jan 11."
& when clicking on bad date option, click highlights picked day with grey

// date picker (first "day" clicked auto-fills check-in)
// hover effect and dates selected background for all days inbetween

// Select Dates Title changes in Minor:
Select Dates -> Select Check-in Dates -> Select Check-out Dates
*/
