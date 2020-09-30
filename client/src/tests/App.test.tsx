import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';
import Price from '../components/Price';
import Reviews from '../components/Reviews';
import Guests from '../components/Guests';

/*
=======================================
Unit Testing App Level - Overall Page
=======================================
*/

// overall components called in App return (shallow)
describe('Page basics at Main App level', () => {
  it('page renders App to service without breaking', () => {
    const wrapper = shallow(<App />);
    // expect(wrapper.find('#price-app-header')).toBe({});
    // expect(wrapper.getElements()).toMatchSnapshot();
    // expect(wrapper.find(Price).render().find('#price-app-header')).toBe(true);
  })

  it('App page contains Header to intro the service', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find("h2");
    const result = header.text();

    expect(result).toBe("AirbnbCheck AvailabilityService by Jacki");
  });

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

});


/*
=======================================
Unit Testing App Level - Minor
=======================================
*/

// test UI render for minor

xdescribe('Testing with enzyme and jest', () => {
  // it('renders header message to service', () => {
  //   const wrapper = shallow(<App />);
  //   const welcome = Airbnb Check Availability Service;
  //   expect(wrapper.contains(welcome)).toBe(true);
  //   // expect(wrapper.contains(welcome)).toEqual(true);
  // });

  // it('renders price, rating, and reviews message', () => {
  //   const guestComponent = mount(<Guests />);
  //   expect(guestComponent).toBePresent();
  // });
  xit('renders app service without breaking', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  xit('dynamically renders price', () => {
    const wrapper = mount(<Price />);
    expect(wrapper).toMatchSnapshot();
  })

});

// app-level (each shallow test only tests one function)
// test GET req (data received)
// test price and review rendered (from GET req)
// calendar input is a form
// calendar expands modal
// guest input expands modal
// button rendered

xdescribe('<Price /> and <Reviews /> component mounted to App', () => {
  // it('renders price component in upper left corner of app-container', () => {
  //   const price = shallow(<Price />);
  //   expect(price.contains(<span id="price-app-header">$190</span>)).toBe(true);
  //   //expect(price.contains('/night')).toBe(true);
  // });

  // it('renders child component', () => {
  //   const component = mount
  //   expect(render(<App />).text()).toEqual('Airbnb Check Availability Service');
  // });

});