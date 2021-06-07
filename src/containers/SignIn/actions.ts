import {
  POST_SIGN_IN_REQUEST,
  POST_SIGN_IN_SUCCESS,
  POST_SIGN_IN_FAIL,
} from './constants';
import { IsignInInfo } from './saga';
import { IsignInState } from './reducer';

export type TypeActions = ReturnType<
  typeof postSignInRequest | typeof postSignInSuccess | typeof postSignInFail
>;

export const postSignInRequest = (data: IsignInInfo) => ({
  type: POST_SIGN_IN_REQUEST,
  data,
});

export const postSignInSuccess = (data: IsignInState) => ({
  type: POST_SIGN_IN_SUCCESS,
  data,
});

export const postSignInFail = (error: number) => ({
  type: POST_SIGN_IN_FAIL,
  error,
});
