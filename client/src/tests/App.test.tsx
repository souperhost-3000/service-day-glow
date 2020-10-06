import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';
import Price from '../components/Price';
import Reviews from '../components/Reviews';
import DatePicker from '../components/DatePicker';
import Guests from '../components/Guests';
import CA from '../components/CA';
// import Calendar from '../components/Modals/Calendar';
import CalContainer from '../components/CalContainer';

/*
=======================================
Unit Testing App Level - Overall Page
=======================================
*/

describe('Page basics at Main App level', () => {
  it('page renders App to service without breaking', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // it('App page contains Header to intro the service', () => {
  //   const wrapper = shallow(<App />);
  //   const header = wrapper.find("h2");
  //   const result = header.text();

  //   expect(result).toBe("AirbnbCheck AvailabilityService by Jacki");
  // });

  it('Minor - calendar has header', () => {
    const wrapper = shallow(<App />);
    const calHeader = wrapper.find("div.selectDates").text();

    expect(calHeader).toBe("Select Dates");
  })

});

/*
=======================================
Unit Testing App Level - Major
=======================================
*/

describe('Components nested in Major render', () => {

  it('should render Price and Reviews', () => {
    const wrapper = shallow(<App />);
    const price = wrapper.find(Price);
    const reviews = wrapper.find(Reviews);

    expect(price.exists()).toBe(true);
    expect(reviews.exists()).toBe(true);
  })

  it('should render DatePicker and GuestsPicker', () => {
    const wrapper = shallow(<App />);
    const datePicker = wrapper.find(DatePicker);
    const guests = wrapper.find(Guests);

    expect(datePicker.exists()).toBe(true);
    expect(guests.exists()).toBe(true);
  })

  it('should render CA button', () => {
    const wrapper = shallow(<App />);
    const caButton = wrapper.find(CA);

    expect(caButton.exists()).toBe(true);
  })

});

/*
=======================================
Unit Testing App Level - Minor
=======================================
*/

describe('Components nested in Minor render', () => {

  it('should render two Calendars', () => {
    const wrapper = shallow(<App />);
    const twoCal = wrapper.find(CalContainer);

    expect(twoCal.exists()).toBe(true);
  })

  it('should render clear button', () => {
    const wrapper = shallow(<App />);
    const clearBtn = wrapper.find("button.clear-btn");
    const clearBtntxt = clearBtn.text();

    expect(clearBtn.exists()).toBe(true);
    expect(clearBtntxt).toBe("Clear date");
  })

});

// app-level (each shallow test only tests one function)
// test GET req (data received)
// test price and review rendered (from GET req)
// calendar input is a form
// calendar expands modal
// guest input expands modal
// button rendered