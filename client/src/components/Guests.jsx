import React, { useState, useEffect } from 'react';
import GuestModal from './Modals/GuestModal';

// Guest selector (num adults, children, infants)
function Guests({ guestLimit }) {
  const [showGMod, setGuestModal] = useState(false);
  const [guestTotal, setGuestTotal] = useState(1);

  useEffect(() => {
    console.log('showGuestModal is: ', showGMod);
  }, [showGMod]);

  function updateGuestTotal(e) {
    setGuestTotal(guestTotal + e);
  }

  return (
    <div className="guestPicker">
      <div>
        <span id="guest-title">Guests</span>
        <br />
        <span id="guestCount">
          {`${guestTotal} guest${guestTotal > 1 ? 's' : ''}`}
        </span>
        <button id="guest-expand-mod" type="button" onClick={() => setGuestModal(true)}>
          ╲╱
        </button>
      </div>
      {/* <button id="guest-collapse-mod"> ╱╲</button> */}
      <div className="guestPicker-modal">
        <span>
          <GuestModal
            showGMod={showGMod}
            setGuestModal={setGuestModal}
            updateGuestTotal={updateGuestTotal}
            guestLimit={guestLimit}
          />
        </span>
      </div>
    </div>
  );
}

export default Guests;
