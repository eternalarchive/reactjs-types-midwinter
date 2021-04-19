import produce from 'immer';
import { TypeActions } from './actions';
import {
  GET_STATISTICS_ACTOR_REQUEST,
  GET_STATISTICS_ACTOR_SUCCESS,
  GET_STATISTICS_VIEW_REQUEST,
  GET_STATISTICS_VIEW_SUCCESS,
} from './constants';

export interface Tactor {
  actor: string;
  count: number;
}

export interface Tview {
  month: string;
  count: number;
  total: number;
}

interface IinitialState {
  actorDatas: {
    loading: boolean;
    actorCounts: Tactor[] | null;
  };
  viewDatas: {
    loading: boolean;
    viewCounts: Tview[] | null;
  };
}

export const initialState: IinitialState = {
  actorDatas: {
    loading: false,
    actorCounts: null,
  },
  viewDatas: {
    loading: false,
    viewCounts: null,
  },
};

export default function calendar(
  state: IinitialState = initialState,
  action: TypeActions,
) {
  return produce(state, draftState => {
    switch (action.type) {
      case GET_STATISTICS_ACTOR_REQUEST:
        draftState.actorDatas.loading = true;
        break;
      case GET_STATISTICS_ACTOR_SUCCESS:
        draftState.actorDatas = {
          loading: false,
          actorCounts: action.data,
        };
        break;
      case GET_STATISTICS_VIEW_REQUEST:
        draftState.viewDatas.loading = true;
        break;
      case GET_STATISTICS_VIEW_SUCCESS:
        draftState.viewDatas = {
          loading: false,
          viewCounts: action.data,
        };
        break;
      default:
        return draftState;
    }
  });
}
