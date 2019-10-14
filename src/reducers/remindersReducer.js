import { createReminder, updateReminders, getWeatherFromRemindersSuccess } from 'actions';

const initialState = {
  reminders: [],
  weathers: [],
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case createReminder.toString():
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      };
    case updateReminders.toString():
      return {
        ...state,
        reminders: action.payload,
      };
    case getWeatherFromRemindersSuccess.toString():
      return {
        ...state,
        weathers: action.payload,
      };
    default:
      return state;
  }
};

export default remindersReducer;
