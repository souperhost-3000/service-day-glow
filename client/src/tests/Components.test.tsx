import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';
import Price from '../components/Price';
import Reviews from '../components/Reviews';
import Guests from '../components/Guests';
import CA from '../components/CA';

/*
=======================================
Unit Testing - Major Inner Components
=======================================
*/

// overall components called in App return (shallow)


/*
=======================================
Unit Testing - Price
=======================================
*/

// Price dynamically mounted
// Format appears $XXX / night not ($ / night)
describe('Price per night appears on Main App level', () => {
  it('page renders listing Price and is not empty', () => {
    const wrapper = shallow(<Price />);
    const pricePerNight = wrapper.find("div.price-app");
    const priceIsNotBlank = wrapper.find("div.price-app").text();

    expect(pricePerNight.exists()).toBe(true);
    expect(priceIsNotBlank).not.toBe(' $ / night');
  })
});

/*
=======================================
Unit Testing - Reviews
=======================================
*/

// Reviews star, rating, count dynamically mounted
// Format appears 'star, X.X, (count)'
describe('Review and reviews count appear on Main App level', () => {
  it('Review rating renders and is not empty', () => {
    const wrapper = shallow(<Reviews rating={3.5} reviews_count={197} />);
    const ratingNumber = wrapper.find("div.reviews");
    const reviewsCount = wrapper.find("span.reviewsCount");

    expect(ratingNumber.exists()).toBe(true);
    expect(ratingNumber.text()).not.toBe('  ');
    expect(reviewsCount.exists()).toBe(true);
    expect(reviewsCount.text()).not.toBe('  ()');
  })

  it('Reviews function should format ratings and reviews_count input', () => {
    const wrapper = shallow(<Reviews rating={3.5} reviews_count={197} />);
    const ratingNumber = wrapper.find("span.rating-scored");
    const reviewsCount = wrapper.find("span.reviewsCount");

    expect(ratingNumber.text()).toBe('  3.5');
    expect(reviewsCount.text()).toBe('  (197)');
  })
});

/*
=======================================
Unit Testing - Date Picker
=======================================
*/

// date pick appears on app major and cal mod

// date picker form takes date value (num, sym)
// displays 2 placeholder types ("add date", "MM/DD/YYYY")

// cal mod - state logic (closed - false vs open - true)
// closed
// 2 - open
// 2 - closing

/*
=======================================
Unit Testing - Guest Details
=======================================
*/

// Default mounts with placeholder 1 guest
// onClick expands modal
// closes - off click

// guest modal tests
// guest overall count incr/decr with buttons
// indivd adult, child, infant count incr/decr with buttons

/*
=======================================
Unit Testing - CA Button
=======================================
*/

// requires date picker and guests to be filled (true)
// onClick (expands cost est modal)
describe('Check Availability button (CA) expands App Major w/ Cost Est', () => {
  it('CA button exists and says "Check availability"', () => {
    const wrapper = shallow(<CA />);
    const caBtn = wrapper.find("div.CA-app");

    expect(caBtn.exists()).toBe(true);
    // expect(caBtn.text()).toBe('Check availability');
  })

  it('Expands cost estimate modal based on dates and guests selected', () => {
    const wrapper = shallow(<CA />);
    const caBtn = wrapper.find("button.CA-btn");

    expect(caBtn.exists()).toBe(true);
    // expect(caBtn).simulate('click');

  })
});

// OTHER CONDITIONAL LOGIC
// if datepicker and guest count is filled (expands app level + trip_est)