import produce from 'immer';
import { TypeActions } from './actions';
import {
  GET_ALL_TICKETS_REQUEST,
  GET_ALL_TICKETS_SUCCESS,
  GET_UPCOMING_TICKETS_REQUEST,
  GET_UPCOMING_TICKETS_SUCCESS,
} from './constants';
import { TticketDatas } from './saga';

interface TcalendarDatas {
  loading: boolean;
  calendarTickets: TticketDatas[] | null;
}

export interface TupcomingTickets {
  today: [] | TticketDatas[];
  others: [] | TticketDatas[];
}

interface TupcomingDatas {
  loading: boolean;
  upcomingTickets: null | TupcomingTickets;
}

interface IinitialState {
  calendarDatas: TcalendarDatas;
  upcomingDatas: TupcomingDatas;
}

export const initialState: IinitialState = {
  calendarDatas: {
    loading: false,
    calendarTickets: null,
  },
  upcomingDatas: {
    loading: false,
    upcomingTickets: null,
  },
};

export default function calendar(
  state: IinitialState = initialState,
  action: TypeActions,
) {
  return produce(state, draftState => {
    switch (action.type) {
      case GET_ALL_TICKETS_REQUEST:
        draftState.calendarDatas.loading = true;
        break;
      case GET_ALL_TICKETS_SUCCESS:
        draftState.calendarDatas = {
          calendarTickets: action.data,
          loading: false,
        };
        break;
      case GET_UPCOMING_TICKETS_REQUEST:
        draftState.upcomingDatas.loading = true;
        break;
      case GET_UPCOMING_TICKETS_SUCCESS:
        draftState.upcomingDatas = {
          upcomingTickets: action.data,
          loading: false,
        };
        break;
      default:
        return draftState;
    }
  });
}
