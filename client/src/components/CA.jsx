/* eslint-disable no-alert */
import React from 'react';

// check availability button
function CA({ setCostEst, callToAction }) {
  return (
    <div className="CA-app">
      <button
        className="CA-btn"
        type="button"
        onClick={() => {
          if (callToAction === 'Check availability') {
            setCostEst(true);
          } else {
            alert('Please sign in to complete your reservation');
          }
        }}
      >
        {callToAction}
      </button>
    </div>
  );
}

export default CA;
