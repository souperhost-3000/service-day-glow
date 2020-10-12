/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  const [showCalModal, setCalModal] = useState(false);
  const [listingData, setListingData] = useState(exampleData);
  const listingID = 11;

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

  function updateDate(e, check) {
    if (check === 'in') {
      setCheckIn(e);
    }
    if (check === 'out') {
      setCheckOut(e);
    }
  }

  // calculate number of nights for selected dates
  useEffect(() => {
    if (checkIn && checkOut) {
      if (checkIn.slice(0, 1) === checkOut.slice(0, 1)) {
        const nights = Number(checkOut.slice(3, 5)) - Number(checkIn.slice(3, 5));
        setNumNights(nights);
      }
    }
  }, [checkIn, checkOut]);

  // changes subHeader details based on user's interaction (&#8226;)
  useEffect(() => {
    if (checkIn && checkOut) {
      setSubHeader(`${checkIn} - ${checkOut}`);
    } else if (checkIn) {
      setSubHeader('Minimum stay: 2 nights');
    } else if (!checkIn && !checkOut) {
      setSubHeader(`${listingData.listing_type} . ${listingData.beds} beds . ${listingData.baths} bath`);
    }
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
    <div className="entire-App" onClick={() => setCalModal(false)}>
      <div className="scroll-wrapper">
        <div className="header-container">
          <div className="header">
            <div className="description-title">
              {`${listingData.listing_type} hosted by ${listingData.host}`}
            </div>
            <h3>
              {`${listingData.guest_limit} guests . ${listingData.bedrooms} bedrooms . ${listingData.beds} beds . ${listingData.baths} bath`}
            </h3>
          </div>
          <div className="listing-static-info">
            <div>
              <img id="listing-static-top" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/airbnbStatic1.webp" alt="" />
            </div>
            <div>
              <img id="listing-static-bottom" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/airbnbStatic2.webp" alt="" />
            </div>
          </div>
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
                  adjPrice={adjPrice}
                  showCalModal={showCalModal}
                  updateDate={updateDate}
                  checkIn={checkIn}
                  checkOut={checkOut}
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
                  numNights={numNights}
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
                  updateDate={updateDate}
                  checkIn={checkIn}
                  checkOut={checkOut}
                />
              </div>
            </div>
            <div className="actions">
              <div className="taxesWarning">
                Prices on calendar do not include taxes and fees
              </div>
              <button
                className="clear-btn"
                type="button"
              >
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
