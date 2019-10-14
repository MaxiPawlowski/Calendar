import React from 'react';
import { shallow, mount } from 'enzyme';
import ReminderForm from "./index";

describe('ReminderForm', () => {
  const mockedDate = 1487076708000;
  let wrapper;
  
  describe('when rendered', () => {
    beforeAll(() => {
      wrapper = shallow(<ReminderForm handleSave={() => {}} />);
    });

    it('should render correctly', () => {
      expect(wrapper.dive()).toMatchSnapshot();
    });
  });

  describe('when submitting', () => {
    const handleSave = jest.fn();
    
    beforeAll(() => {
      wrapper = shallow(<ReminderForm handleSave={handleSave} />).dive();
    });
  
    it('should trigger handleSave from props with the input (default) values', () => {
      wrapper.find('form').simulate('submit', { preventDefault() { } });
      expect(handleSave).toHaveBeenCalledWith({
        title: '',
        color: '#7fffff',
        date: new Date(mockedDate),
        city: ''
      });
    });
  });

  describe('when submitting with previous values', () => {
    const handleSave = jest.fn();
    
    beforeAll(() => {
      wrapper = mount(
        <ReminderForm
          handleSave={handleSave}
          prevValues={{
            title: 'test title',
            color: '#FFFFFF',
            id: Date.now(),
            date: new Date(mockedDate),
            city: 'test city'
          }}
        />
      );
    });

    it('should trigger handleSave from props with the input values', () => {
      wrapper.find('form').simulate('submit', { preventDefault() { } });
      expect(handleSave).toHaveBeenCalledWith({
        title: 'test title',
        color: '#FFFFFF',
        id: Date.now(),
        date: new Date(mockedDate),
        city: 'test city'
      });
    });
  });
});
