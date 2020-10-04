import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/app.css';
import Price from './Price';
import Reviews from './Reviews';
import DatePicker from './DatePicker';
import CA from './CA';
import Guests from './Guests';
import exampleData from '../tests/exampleData';
import CalContainer from './CalContainer';
import CostEstModal from './Modals/CostEstModal';

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

// Axios GET req
// add price and reviews to app level
*/

// top level service component (displayed before user interacts with anything)
function App() {
  const [showCostEst, setCostEst] = useState(false);
  const [style, setStyle] = useState({ height: '260px' });
  const [listingData, setListingData] = useState(exampleData);
  const listingID = 1;

  // const [guestDetails, setGuestDetails] = useState(1);
  const [guestTotal, setGuestTotal] = useState(1);
  function updateGuestTotal(e) {
    setGuestTotal(guestTotal + e);
  }

  const [adjPrice, setAdjPrice] = useState(0);

  // const getListingData =
  useEffect(() => {
    axios.get(`/availability/${listingID}`)
      .then((response) => setListingData(response.data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [listingID]);

  useEffect(() => {
    if (showCostEst) {
      setStyle({ height: '500px' });
    }
  }, [showCostEst]);

  // as guest total changes, adjust nightly rate
  useEffect(() => {
    if (guestTotal > listingData.guest_included) {
      const extraGuestCount = (guestTotal - listingData.guest_included);
      setAdjPrice((listingData.guest_extra_charge * extraGuestCount) + listingData.price);
    } else {
      setAdjPrice(listingData.price);
    }
  }, [guestTotal, listingData]);

  return (
    <div className="entire-App">
      <div className="scroll-wrapper">
        <div className="header optional">
          <h2>
            Airbnb
            <br />
            Check Availability
            <br />
            Service by Jacki
          </h2>
        </div>
        <section className="major">
          <div className="major-container">
            <div className="app-container" style={style}>
              <div className="upper-app">
                <Price adjPrice={adjPrice} />
                <Reviews
                  rating={listingData.rating}
                  reviews_count={listingData.reviews_count}
                />
              </div>
              <div className="middle-app">
                <DatePicker
                  availability={listingData.availability}
                />
                <Guests
                  guestLimit={listingData.guest_limit}
                  updateGuestTotal={updateGuestTotal}
                  guestTotal={guestTotal}
                />
              </div>
              <div className="lower-app">
                <CA setCostEst={setCostEst} />
                <CostEstModal
                  listingData={listingData}
                  showCostEst={showCostEst}
                  adjPrice={adjPrice}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="minor">
          <div className="minor-container">
            <div className="minor-header">
              <div className="modal-header-left">
                <div className="selectDates">
                  Select Dates
                </div>
                <span className="listing_rooms">Entire house . 2 bds . 1 bath</span>
              </div>
            </div>
            <div className="cal-dbl-container">
              <div className="dbl-all">
                <CalContainer
                  availability={listingData.availability}
                />
              </div>
            </div>
            <div className="actions">
              <div className="taxesWarning">
                Prices on calendar do not include taxes and fees
              </div>
              <button className="clear-btn" type="button">
                Clear date
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
