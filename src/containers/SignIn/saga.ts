import { call, put, takeLatest } from 'redux-saga/effects';
import { postSignInApi } from '../../api/request';
import history from '../../utils/history';
import { POST_SIGN_IN_REQUEST } from './constants';
import { postSignInSuccess, postSignInFail } from './actions';

export interface TsignInInfo {
  email: string;
  password: string;
}

export interface TsignInResDatas {
  data: { access_token: string };
}

interface PostSignInProps {
  data: TsignInInfo;
  type: string;
}

function* postSignIn(
  action: PostSignInProps,
): Generator<unknown, void, TsignInResDatas> {
  try {
    const response = yield call(postSignInApi, action.data);
    const { access_token } = response.data;
    localStorage.setItem('token', access_token);

    yield put(
      postSignInSuccess({
        email: action.data.email,
        token: access_token,
        loading: false,
        error: null,
      }),
    );
    yield history.push('/');
  } catch (error) {
    yield put(postSignInFail(error.response.status));
  }
}

export function* signInSaga() {
  yield takeLatest(POST_SIGN_IN_REQUEST, postSignIn);
}
