import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';
import Price from '../components/Price';

describe('Testing with enzyme and jest', () => {
  it('renders header message to service', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Airbnb Check Availability Service</h2>;
    expect(wrapper.contains(welcome)).toBe(true);
    // expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('renders static message', () => {
    expect(render(<App />).text()).toEqual('Airbnb Check Availability Service$190/night');
  });

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
    expect(price.contains(<span>$190/night</span>)).toBe(true);
    //expect(price.contains('/night')).toBe(true);
  });

  // it('renders static message', () => {
  //   expect(render(<App />).text()).toEqual('Airbnb Check Availability Service');
  // });

});