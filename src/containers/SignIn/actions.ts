import {
  POST_SIGN_IN_REQUEST,
  POST_SIGN_IN_SUCCESS,
  POST_SIGN_IN_FAIL,
} from './constants';
import { TsignInInfo } from './saga';
import { TsignInState } from './reducer';

export type TypeActions = ReturnType<
  typeof postSignInRequest | typeof postSignInSuccess | typeof postSignInFail
>;

export const postSignInRequest = (data: TsignInInfo) => ({
  type: POST_SIGN_IN_REQUEST,
  data,
});

export const postSignInSuccess = (data: TsignInState) => ({
  type: POST_SIGN_IN_SUCCESS,
  data,
});

export const postSignInFail = (error: number) => ({
  type: POST_SIGN_IN_FAIL,
  error,
});
