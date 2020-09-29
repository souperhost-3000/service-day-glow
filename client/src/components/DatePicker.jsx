import React, { useState } from 'react';
import CalModal from './Modals/CalModal';

// date selectors (check-in, check-out)
function DatePicker({ availability }) {
  console.log(availability);
  return (
    <div className="datePicker">
      <span className="check-in-app">
        Check-in
        <form className="date-form">
          <input id="check-in-input" type="text" placeholder="Add date" />
        </form>
      </span>
      <span className="check-out-app">
        Checkout
        <form className="date-form">
          <input id="check-out-input" type="text" placeholder="Add date" />
        </form>
      </span>
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
