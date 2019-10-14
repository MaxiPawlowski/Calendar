import React from 'react';
import { shallow } from 'enzyme';
import ReminderItem from "./index";

describe('ReminderItem', () => {
  let wrapper;

  describe('when rendered', () => {
    beforeAll(() => {
      wrapper = shallow(
        <ReminderItem
          editReminder={()=>{}}
          deleteReminder={()=>{}}
          reminder={{
            title: "test",
            color: "#246751",
            date: new Date(Date.now()),
            city: "",
            id: 1571083793866
          }}
        />
      );
    });

    it('should render correctly', () => {
      expect(wrapper.dive()).toMatchSnapshot();
    });
  });
});
