import { createReminder, } from 'actions';
import { takeLatest, all } from 'redux-saga/effects';

export default function* watchReminders() {
  yield all([
    // takeLatest(createReminder.toString(), workerCreateReminders),
  ]);
}
