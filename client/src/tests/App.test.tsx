import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';

describe('Testing with enzyme and jest', () => {
  it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper.contains(welcome)).toBe(true);
    // expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('renders static message', () => {
    expect(render(<App />).text()).toEqual('Welcome to React');
  });

});

