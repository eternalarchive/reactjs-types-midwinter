import { all } from 'redux-saga/effects';
import { calendarSaga } from '../containers/Calendar/saga';
import { signInSaga } from '../containers/SignIn/saga';
import { statisticsSaga } from '../containers/Statistics/saga';
import { ticketInputSaga } from '../containers/TicketInput/saga';

export default function* rootSaga() {
  yield all([
    signInSaga(),
    ticketInputSaga(),
    calendarSaga(),
    statisticsSaga(),
  ]);
}
