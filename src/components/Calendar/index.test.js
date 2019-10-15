import React from 'react';
import { shallow } from 'enzyme';
import Calendar from "./index";

describe('Calendar', () => {
  let wrapper;

  describe('when rendered', () => {
    beforeAll(() => {
      wrapper = shallow(
        <Calendar
          reminders={[]}
          handleDayExpand={()=>{}}
          deleteReminder={()=>{}}
          calendarDate={{
            year: 2019,
            month: 10
          }}
        />
      );
    });

    it('should render correctly', () => {
      expect(wrapper.dive()).toMatchSnapshot();
    });
  });
});
