import React, { useState } from 'react';

// Guest modal (conditional pop up logic)
function GuestModal({ showGMod, setGuestModal, updateGuestTotal }) {
  const [adults, setAdults] = useState(1);

  if (!showGMod) {
    return null;
  }
  return (
    <div className="guest-modal">
      <div className="g-mod-groups">
        <div className="g-adults">
          <div className="adults group-header">
            Adults
          </div>
          <div className="groups-right">
            <button
              className="minus"
              type="button"
              onClick={() => {
                setAdults(adults - 1);
                updateGuestTotal(-1);
              }}
            >
              -
            </button>
            <span className="adult_count">{adults}</span>
            <button
              className="plus"
              type="button"
              onClick={() => {
                setAdults(adults + 1);
                updateGuestTotal(1);
              }}
            >
              +
            </button>
          </div>
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

/*
(3) div with guest group - each has own state
(2 buttons/group) + and -; takes in group_id and increments count displayed
(count changes guest total count) - total state

receives listing data (free guest count) - displays dynamic message "guestWarning"
close button - change css to match "clear button"
ensure guest total count displays after modal closes (app major - guestPicker)

state/total guests pass back to app level for (dynamic pricing change and cost est)
*/
