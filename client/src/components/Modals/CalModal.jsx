import React from 'react';
import CalContainer from '../CalContainer';
import DateBoxes from '../DateBoxes';

// Calendar modal (conditional pop up logic)
function CalModal({
  show, setCalModal, availability, subHeader, adjPrice, updateDate, checkIn, checkOut,
}) {
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
          <span className="listing_rooms">{subHeader}</span>
        </div>
        <div className="modal-dateBoxes">
          <DateBoxes
            updateDate={updateDate}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        </div>
      </div>
      <div className="cal-dbl-container">
        <CalContainer
          availability={availability}
          subHeader={subHeader}
          adjPrice={adjPrice}
          updateDate={updateDate}
          checkIn={checkIn}
          checkOut={checkOut}
        />
      </div>
      <div className="actions">
        <div className="taxesWarning">
          Prices on calendar do not include taxes and fees
        </div>
        <button className="close-btn" type="button" onClick={() => setCalModal(false)}>
          Close
        </button>
        <button
          className="clear-btn"
          type="button"
          // onClick={() => {
          //   updateDate('', 'in');
          //   updateDate('', 'out');
          // }}
        >
          Clear date
        </button>
      </div>
    </div>
  );
}

export default CalModal;
