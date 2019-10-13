import { all, fork } from 'redux-saga/effects';

import watchRemindersSaga from 'sagas/watchers/reminders';

export default function* root() {
  yield all([
    fork(watchRemindersSaga),
  ]);
}
