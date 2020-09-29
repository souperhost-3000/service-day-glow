import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/app.css';
import Price from './Price';
import Reviews from './Reviews';
import DatePicker from './DatePicker';
import CA from './CA';
import Guests from './Guests';
import exampleData from '../tests/exampleData';

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
  const [listingData, setListingData] = useState(exampleData);
  const listingID = 20;

  // const getListingData =
  useEffect(() => {
    axios.get(`/availability/${listingID}`)
      .then((response) => setListingData(response.data))
      .catch((err) => console.log(err));
  }, [listingID]);

  return (
    <div>
      <div className="header optional">
        <h2>
          Airbnb
          <br />
          Check Availability
          <br />
          Service by Jacki
        </h2>
      </div>
      <div className="app-container">
        <div className="upper-app">
          <Price price={listingData.price} />
          <Reviews
            rating={listingData.rating}
            reviews_count={listingData.reviews_count}
          />
        </div>
        <div className="middle-app">
          <DatePicker
            availability={listingData.availability}
          />
          <Guests />
        </div>
        <div className="lower-app">
          <CA />
        </div>
      </div>
    </div>
  );
}

export default App;
// Axios GET req

// add price and reviews to app level
