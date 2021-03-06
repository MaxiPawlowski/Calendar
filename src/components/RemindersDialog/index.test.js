import React from 'react';
import { shallow } from 'enzyme';
import RemindersDialog from "./index";

describe('RemindersDialog', () => {
  let wrapper;

  describe('when rendered', () => {
    beforeAll(() => {
      wrapper = shallow(
        <RemindersDialog
          handleClose={() => { }}
          getWeatherFromReminders={() => { }}
          deleteReminder={() => { }}
          editReminder={() => { }}
          open={false}
          data={{
            weathers:[],
            reminders:[],
            date: new Date(Date.now()),
          }}
        />
      );
    });

    it('should render correctly', () => {
      expect(wrapper.dive()).toMatchSnapshot();
    });
  });
});
