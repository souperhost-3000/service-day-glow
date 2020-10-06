import React, { useState, useEffect } from 'react';
import GuestModal from './Modals/GuestModal';

// Guest selector (num adults, children, infants)
function Guests({ guestLimit, updateGuestTotal, guestTotal }) {
  const [showGMod, setGuestModal] = useState(false);
  // const [guestTotal, setGuestTotal] = useState(1);

  useEffect(() => {
    if (showGMod) {
      document.getElementById('guest-expand-mod').style.transform = 'rotate(-180deg)';
    }
    if (!showGMod) {
      document.getElementById('guest-expand-mod').style.transform = 'rotate(0deg)';
    }
  }, [showGMod]);

  return (
    <div className="guestPicker">
      <div>
        <span id="guest-title">Guests</span>
        <br />
        <span id="guestCount">
          {`${guestTotal} guest${guestTotal > 1 ? 's' : ''}`}
        </span>
        <button id="guest-expand-mod" type="button" onClick={() => setGuestModal(!showGMod)}>
          {/* ╲╱ */}
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
