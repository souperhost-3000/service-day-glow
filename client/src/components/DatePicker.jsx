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

  // function newInputDate(e, check) {
  //   console.log('reached datePicker: ', e, check);
  //   updateDate(e, check);
  // }
  return (
    <div>
      <div className="datePicker" onClick={() => setModal(true)}>
        <DateBoxes
          updateDate={updateDate}
          checkIn={checkIn}
          checkOut={checkOut}
        />
      </div>
      <div className="modal">
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

// const [modal, setModal] = useState(false);
// modalOpen() {};
// const modalClose = () => {

// };
/* <Modal
  show={modal}
  modalClose={modalClose}
/> */
