import React from 'react';

// Guest modal (conditional pop up logic)
function GuestModal({ showGMod, setGuestModal }) {
  if (!showGMod) {
    return null;
  }
  return (
    <div className="guest-modal">
      <div className="g-mod-groups">
        <div className="g-mod-adults">
          <div className="adults">
            Adults
          </div>
          <span className="adult_count">count</span>
        </div>
      </div>

      <div className="actions">
        <div className="guestWarning">
          DYNAMIC 4 guests maximum. Infants don’t count toward the number of guests.
        </div>
        <button className="close-btn" type="button" onClick={() => setGuestModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default GuestModal;
