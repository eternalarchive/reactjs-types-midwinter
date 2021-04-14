import produce from 'immer';
import { TypeActions } from './actions';
import { GET_ALL_TICKETS_REQUEST, GET_ALL_TICKETS_SUCCESS } from './constants';
import { TticketDatas } from './saga';

interface IinitialState {
  loading: boolean;
  calendarDatas: any | null;
}

export const initialState: IinitialState = {
  loading: false,
  calendarDatas: null,
};

export default function calendar(
  state: IinitialState = initialState,
  action: TypeActions,
) {
  return produce(state, draftState => {
    switch (action.type) {
      case GET_ALL_TICKETS_REQUEST:
        draftState.loading = true;
        break;
      case GET_ALL_TICKETS_SUCCESS:
        draftState.calendarDatas = action.data;
        draftState.loading = false;
        break;
      default:
        return draftState;
    }
  });
}
