import React, { useState, useEffect } from 'react';
import CalModal from './Modals/CalModal';
import DateBoxes from './DateBoxes';

// date selectors (check-in, check-out)
function DatePicker({ availability, updateDate, subHeader }) {
  const [showCalModal, setCalModal] = useState(false);

  useEffect(() => {
    console.log('showCalModal is: ', showCalModal);
  }, [showCalModal]);

  return (
    <div>
      <div className="datePicker" onClick={() => setCalModal(true)}>
        <DateBoxes />
      </div>
      <div className="modal">
        <span>
          <CalModal
            show={showCalModal}
            setCalModal={setCalModal}
            availability={availability}
            subHeader={subHeader}
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
