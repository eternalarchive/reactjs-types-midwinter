import produce from 'immer';
import { TypeActions } from './actions';
import {
  PATCH_TICKET_DATA_REQUEST,
  PATCH_TICKET_DATA_SUCCESS,
} from './constants';

interface IinitialState {
  loading: boolean;
}

export const initialState: IinitialState = {
  loading: false,
};

export default function tickets(
  state: IinitialState = initialState,
  action: TypeActions,
) {
  return produce(state, draftState => {
    switch (action.type) {
      case PATCH_TICKET_DATA_REQUEST:
        draftState.loading = true;
        break;
      case PATCH_TICKET_DATA_SUCCESS:
        draftState.loading = false;
        break;
      default:
        return draftState;
    }
  });
}
