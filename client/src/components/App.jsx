import React, { useState } from 'react';
import '../styles/app.css';
import Price from './Price';
import Reviews from './Reviews';

/* App -> contains:
price (upper left) - if calendar pricing differs (can add logic to add 5% for weekends)
rating (upper right)
date picker (mid-upper)
guestsDetails(mid-lower)
Check Avail button (lower)
(hidden) - cost estimate & reserve button

modals (calendar pop up, guest picker drop down, check avail (expands app container))

state:
  manage property details in props

render each nested functional component (use hooks if needed)
*/

// top level service component (displayed before user interacts with anything)
function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h2>Airbnb Check Availability Service</h2>
        <div className="upper-app">
          <Price />
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default App;
// Axios GET req

// add price and reviews to app level
