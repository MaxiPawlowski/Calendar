import { createAction } from 'redux-actions';

export const createReminder = createAction('CREATE_REMINDER');

export const deleteReminders = createAction('DELETE_REMINDERS');

export const editReminders = createAction('EDIT_REMINDERS');

export const updateReminders = createAction('UPDATE_REMINDERS');

export const changeCalendarDate = createAction('CHANGE_CALENDAR_DATE');

export const getWeatherFromReminders = createAction('GET_WEATHER_FROM_REMINDERS');
export const getWeatherFromRemindersSuccess = createAction('GET_WEATHER_FROM_REMINDERS_SUCCESS');
