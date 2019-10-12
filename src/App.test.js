import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  describe('when rendered', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<App />);
    });

    it('should render correctly', () => {
      expect(wrapper).toBeTruthy();
    });
  });
});
