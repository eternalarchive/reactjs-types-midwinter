import { all } from 'redux-saga/effects';
import { signInSaga } from '../containers/SignIn/saga';
import { ticketInputSaga } from '../containers/TicketInput/saga';

export default function* rootSaga() {
  yield all([signInSaga(), ticketInputSaga()]);
}
