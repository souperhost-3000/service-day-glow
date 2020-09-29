import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';
import Price from '../components/Price';
import Guests from '../components/Guests';

describe('Testing with enzyme and jest', () => {
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

});

// app-level (each shallow test only tests one function)
// test GET req (data received)
// test price and review rendered (from GET req)
// calendar input is a form
// calendar expands modal
// guest input expands modal
// button rendered

describe('<Price /> and <Reviews /> component mounted to App', () => {
  it('renders price component in upper left corner of app-container', () => {
    const price = shallow(<Price />);
    expect(price.contains(<span id="price-app-header">$190</span>)).toBe(true);
    //expect(price.contains('/night')).toBe(true);
  });

  // it('renders child component', () => {
  //   const component = mount
  //   expect(render(<App />).text()).toEqual('Airbnb Check Availability Service');
  // });

});