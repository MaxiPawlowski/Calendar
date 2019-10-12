import React from 'react';
import { shallow } from 'enzyme';
import { StyledApp as Calendar } from "./index";

describe('App', () => {
  let wrapper;

  describe('when rendered', () => {
    beforeAll(() => {
      wrapper = shallow(
        <Calendar
          reminders={[]}
          addReminder={()=>{}}
        />).dive();
    });

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
