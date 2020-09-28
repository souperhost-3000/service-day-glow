import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';

describe('Testing with enzyme and jest', () => {
  it('renders header message to service', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Airbnb Check Availability Service</h2>;
    expect(wrapper.contains(welcome)).toBe(true);
    // expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('renders static message', () => {
    expect(render(<App />).text()).toEqual('Airbnb Check Availability Service');
  });

});

