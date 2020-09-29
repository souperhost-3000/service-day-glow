import React, { useState } from 'react';

// Calendar modal (conditional pop up logic)
function CalModal({ show }) {
  if (!show) {
    return null;
  }
  return (
    <div>
      {console.log('modal has appeared')}
      <div>Hello Cal Modal</div>
    </div>
    // reusable calendar func imported
  );
}

export default CalModal;
