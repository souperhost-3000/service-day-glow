import React, { useState } from 'react';

// check availability button
function CA({ setCostEst }) {
  return (
    <div className="CA-app">
      <button type="button" onClick={() => setCostEst(true)}>Check availability</button>
    </div>
  );
}

export default CA;
