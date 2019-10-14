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
          weathers={[]}
          addReminder={()=>{}}
          removeReminders={()=>{}}
          getWeathers={()=>{}}
          editReminder={()=>{}}
          changeDate={()=>{}}
          calendarDate={{
            year: 2019,
            month: 10
          }}
        />).dive();
    });

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
