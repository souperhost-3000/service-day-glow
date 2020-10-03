import React, { useState } from 'react';

// Guest modal (conditional pop up logic)
function GuestModal({ showGMod, setGuestModal, updateGuestTotal, guestLimit }) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  if (!showGMod) {
    return null;
  }

  function handleClick(group, change) {
    if (adults + children + change <= guestLimit && group !== 'infants') {
      if (group === 'adults') {
        if (adults + change >= 1) {
          setAdults(adults + change);
          updateGuestTotal(change);
        }
      } else if (group === 'children') {
        if (children + change >= 0) {
          setChildren(children + change);
          updateGuestTotal(change);
        }
      }
    } else if (group === 'infants') {
      (infants + change >= 0) ? setInfants(infants + change) : null;
    }
  }

  function createBtn(group, btn) {
    return (
      <button
        className={group}
        type="button"
        onClick={(e) => {
          handleClick(e.target.className, (btn === 'plus' ? 1 : -1));
        }}
      >
        {btn === 'plus' ? '+' : '-'}
      </button>
    );
  }

  return (
    <div className="guest-modal">
      <div className="guest-col-left">
        <div className="g-adults">
          <div className="adults group-header">
            Adults
          </div>
        </div>
        <div className="g-children">
          <div className="children group-header">
            Children
          </div>
          <div className="children sub-header">
            Ages 2-12
          </div>
        </div>
        <div className="g-infants">
          <div className="infants group-header">
            Infants
          </div>
          <div className="infants sub-header">
            Under 2
          </div>
        </div>
      </div>

      <div className="guest-col-right">
        <div className="groups-btns">
          {createBtn('adults', 'minus')}
          <span className="adult_count">{adults}</span>
          {createBtn('adults', 'plus')}
        </div>
        <div className="groups-btns">
          {createBtn('children', 'minus')}
          <span className="children_count">{children}</span>
          {createBtn('children', 'plus')}
        </div>
        <div className="groups-btns">
          {createBtn('infants', 'minus')}
          <span className="infants_count">{infants}</span>
          {createBtn('infants', 'plus')}
        </div>
      </div>

      <div>
        <div className="actions">
          <div className="guestWarning">
            {`${guestLimit} guests maximum. Infants don’t count toward the number of guests.`}
          </div>
          <button className="g-close-btn" type="button" onClick={() => setGuestModal(false)}>
            Close
          </button>
        </div>
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
