import { all } from 'redux-saga/effects';
import { signInSaga } from '../containers/SignIn/saga';

export default function* rootSaga() {
  yield all([signInSaga()]);
}
