import {
  getWeatherFromReminders,
  getWeatherFromRemindersSuccess,
  deleteReminders,
  updateReminders,
  editReminders
} from 'actions';
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { get } from 'axios';

const buildURL = (location) => (
  `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&APPID=24b12e19d3155b8b4f41277b1de8e29b `
)

//There is no api support to get the weather in the specific reminder's date

function* workerGetWeathers(action){ 
  const remindersWithCity = action.payload.filter(({ city }) => !!city);
  const [...rawWeathers] = yield all([
    ...remindersWithCity.map(reminder => call(get, buildURL(reminder.city.location)))
  ]);
  const weathers = rawWeathers.map((weather, index) => ({ weather: weather.data.weather[0], id: remindersWithCity[index].id }));
  yield put(getWeatherFromRemindersSuccess(weathers))
}

function* workerDeleteReminder(action){ 
  let reminders = yield select(state => state.remindersReducer.reminders);
  
  action.payload.forEach(({ id }) => {
    reminders = reminders.filter(reminder => reminder.id !== id);
  });
  yield put(updateReminders(reminders))
}

function* workerEditReminder(action){ 
  const reminders = yield select(state => state.remindersReducer.reminders);
  const foundIndex = reminders.findIndex(reminder => reminder.id === action.payload.id);
  
  reminders[foundIndex] = action.payload;
  yield put(updateReminders(reminders))
}

export default function* watchReminders() {
  yield all([
    takeLatest(getWeatherFromReminders.toString(), workerGetWeathers),
    takeLatest(deleteReminders.toString(), workerDeleteReminder),
    takeLatest(editReminders.toString(), workerEditReminder),
  ]);
}
