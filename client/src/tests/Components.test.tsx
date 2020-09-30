import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';
import Price from '../components/Price';
import Guests from '../components/Guests';



/*
=======================================
Unit Testing - Major Inner Components
=======================================
*/

// overall components called in App return (shallow)
describe('Testing over page at Main App level', () => {
  it('page renders App to service without breaking', () => {
    const wrapper = shallow(<App />);

  })



});

/*
=======================================
Unit Testing - Price
=======================================
*/

// Price dynamically mounted
// Format appears $XXX / night

/*
=======================================
Unit Testing - Reviews
=======================================
*/

// Reviews star, rating, count dynamically mounted
// Format appears 'star, X.X, (count)'

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
// onClick (expands cal modal)


// OTHER CONDITIONAL LOGIC
// if datepicker and guest count is filled (expands app level + trip_est)