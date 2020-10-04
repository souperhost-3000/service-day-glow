import React, { useState } from 'react';

// check availability button
function CA({ setCostEst, callToAction }) {
  return (
    <div className="CA-app">
      <button className="CA-btn" type="button" onClick={() => setCostEst(true)}>{callToAction}</button>
    </div>
  );
}

export default CA;
