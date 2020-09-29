import React, { useState } from 'react';

// Guest selector (num adults, children, infants)
function Guests() {
  return (
    <div className="guestPicker">
      <span id="guest-title">Guests</span>
      <br />
      <span id="guestCount">1 guest</span>
      <button id="guest-expand-mod" type="button"> ╲╱ </button>
      {/* <button id="guest-collapse-mod"> ╱╲</button> */}
    </div>
  );
}

export default Guests;
