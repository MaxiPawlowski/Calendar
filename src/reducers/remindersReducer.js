import { createReminder } from 'actions';

const initialState = { reminders: [] };

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case createReminder.toString():
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      };
    default:
      return state;
  }
};

export default remindersReducer;
