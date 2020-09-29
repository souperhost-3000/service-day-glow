import React, { useState } from 'react';

// Guest selector (num adults, children, infants)
function Guests() {
  return (
    <div className="guestPicker">
      <span id="guest-title">Guests</span>
      <br />
      <span id="guestCount"># guests</span>
      <button id="guest-expand-mod"> ╲╱</button>
      {/* <button id="guest-collapse-mod"> ╱╲</button> */}
    </div>
  );
}

export default Guests;
