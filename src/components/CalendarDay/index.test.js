import React from 'react';
import { shallow } from 'enzyme';
import CalendarDay from "./index";

describe('CalendarDay', () => {
  let wrapper;

  describe('when rendered', () => {
    beforeAll(() => {
      wrapper = shallow(
        <CalendarDay
          reminders={[]}
          date={new Date(Date.now())}
        />
      );
    });

    it('should render correctly', () => {
      expect(wrapper.dive()).toMatchSnapshot();
    });
  });
});
