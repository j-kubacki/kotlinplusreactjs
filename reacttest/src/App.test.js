import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('includes AppHeader', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<AppHeader />)).toEqual(true)
});