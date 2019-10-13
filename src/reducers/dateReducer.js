
import { changeCalendarDate } from 'actions';

const initialState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeCalendarDate.toString():
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default dateReducer;
