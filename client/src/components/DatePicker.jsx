import React, { useState, useEffect } from 'react';
import CalModal from './Modals/CalModal';

// date selectors (check-in, check-out)
function DatePicker({ availability }) {
  const [showCalModal, setCalModal] = useState(false);

  useEffect(() => {
    console.log('showCalModal is: ', showCalModal);
  }, [showCalModal]);

  return (
    <div>
      <div className="datePicker">
        <span className="check-in-app">
          Check-in
          <form className="date-form">
            <input className="date-input" id="check-in-input" type="text" placeholder="Add date" onClick={() => setCalModal(true)} />
          </form>
        </span>
        <span className="check-out-app">
          Checkout
          <form className="date-form">
            <input className="date-input" id="check-out-input" type="text" placeholder="Add date" onClick={() => setCalModal(true)} />
          </form>
        </span>
      </div>
      <div className="modal">
        <span>
          <CalModal
            show={showCalModal}
            setCalModal={setCalModal}
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
