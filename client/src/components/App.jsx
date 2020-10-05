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

// top level service component (displayed before user interacts with anything)
function App() {
  const [showCostEst, setCostEst] = useState(false);
  const [style, setStyle] = useState({ height: '260px' });
  const [callToAction, setCallToAction] = useState('Check availability');
  const [subHeader, setSubHeader] = useState('');
  const [adjPrice, setAdjPrice] = useState(0);
  const [listingData, setListingData] = useState(exampleData);
  const listingID = 42;

  // GET request for Listing Data
  useEffect(() => {
    axios.get(`/availability/${listingID}`)
      .then((response) => setListingData(response.data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [listingID]);

  const [checkOut, setCheckOut] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [numNights, setNumNights] = useState(1);

  // function updateDate(e, check) {
  //   console.log('reached app level: ', e, check);
  //   if (check === 'in') {
  //     setCheckIn(e);
  //   }
  //   if (check === 'out') {
  //     setCheckOut(e);
  //   }
  // }

  // changes subHeader details based on user's interaction (&#8226;)
  useEffect(() => {
    if (checkIn && checkOut) {
      setSubHeader(`${checkIn} - ${checkOut}`);
    } else if (checkIn) {
      setSubHeader('Minimum stay: 2 nights');
    }
    setSubHeader(`${listingData.listing_type} . ${listingData.beds} bds . ${listingData.baths} bath`);
  }, [listingData, checkIn, checkOut]);

  // const [guestDetails, setGuestDetails] = useState(1);
  const [guestTotal, setGuestTotal] = useState(1);
  function updateGuestTotal(e) {
    setGuestTotal(guestTotal + e);
  }

  // when CA button is clicked, expands app major & changes text on CA button
  useEffect(() => {
    if (showCostEst) {
      setStyle({ height: '500px' });
      setCallToAction('Reserve now');
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
                  subHeader={subHeader}
                />
                <Guests
                  guestLimit={listingData.guest_limit}
                  updateGuestTotal={updateGuestTotal}
                  guestTotal={guestTotal}
                />
              </div>
              <div className="lower-app">
                <CA
                  setCostEst={setCostEst}
                  callToAction={callToAction}
                />
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
                <span className="listing_rooms">{subHeader}</span>
              </div>
            </div>
            <div className="cal-dbl-container">
              <div className="dbl-all">
                <CalContainer
                  availability={listingData.availability}
                  subHeader={subHeader}
                  adjPrice={adjPrice}
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