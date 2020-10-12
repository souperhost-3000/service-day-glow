/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import CalModal from './Modals/CalModal';
import DateBoxes from './DateBoxes';

// date selectors (check-in, check-out)
function DatePicker({
  availability, updateDate, subHeader, adjPrice, showCalModal, checkIn, checkOut,
}) {
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    setModal(showCalModal);
  }, [showCalModal]);

  return (
    <div>
      <div className="datePicker" onClick={() => setModal(true)}>
        <DateBoxes
          updateDate={updateDate}
          checkIn={checkIn}
          checkOut={checkOut}
        />
      </div>
      <div className="modal-middle">
        <span>
          <CalModal
            show={showModal}
            setCalModal={setModal}
            availability={availability}
            subHeader={subHeader}
            adjPrice={adjPrice}
            updateDate={updateDate}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        </span>
      </div>
    </div>
  );
}

export default DatePicker;
