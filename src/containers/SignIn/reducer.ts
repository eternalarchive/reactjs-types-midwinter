import produce from 'immer';
import { TypeActions } from './actions';
import {
  POST_SIGN_IN_REQUEST,
  POST_SIGN_IN_SUCCESS,
  POST_SIGN_IN_FAIL,
} from './constants';

export interface TsignInState {
  email: string | null;
  token: string | null;
  loading: boolean;
  error: number | null;
}

interface IinitialState {
  signInInfo: TsignInState;
}

export const initialState: IinitialState = {
  signInInfo: { loading: false, email: null, token: null, error: null },
};

export default function signIn(
  state: IinitialState = initialState,
  action: TypeActions,
) {
  return produce(state, draftState => {
    switch (action.type) {
      case POST_SIGN_IN_REQUEST:
        draftState.signInInfo.loading = true;
        break;
      case POST_SIGN_IN_SUCCESS:
        draftState.signInInfo = action.data;
        break;
      case POST_SIGN_IN_FAIL:
        draftState.signInInfo.error = action.error;
        break;
      default:
        return draftState;
    }
  });
}
