import { all } from 'redux-saga/effects';
import { scheduleSaga } from '../containers/Schedule/saga';
import { signInSaga } from '../containers/SignIn/saga';
import { statisticsSaga } from '../containers/Statistics/saga';
import { ticketInputSaga } from '../containers/TicketInput/saga';
import { ticketsSaga } from '../containers/Tickets/saga';

export default function* rootSaga() {
  yield all([
    signInSaga(),
    ticketInputSaga(),
    scheduleSaga(),
    statisticsSaga(),
    ticketsSaga(),
  ]);
}
