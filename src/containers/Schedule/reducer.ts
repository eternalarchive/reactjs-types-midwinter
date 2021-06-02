import produce from 'immer';
import { TypeActions } from './actions';
import {
  GET_ALL_TICKETS_REQUEST,
  GET_ALL_TICKETS_SUCCESS,
  GET_UPCOMING_TICKETS_REQUEST,
  GET_UPCOMING_TICKETS_SUCCESS,
} from './constants';
import { TticketData } from './saga';

interface TcalendarDatas {
  loading: boolean;
  calendarTickets: TticketData[] | [];
}

export interface TupcomingTickets {
  today: TticketData[] | [];
  others: TticketData[] | [];
}

interface TupcomingDatas {
  loading: boolean;
  upcomingTickets: TupcomingTickets;
}

interface IinitialState {
  calendarDatas: TcalendarDatas;
  upcomingDatas: TupcomingDatas;
}

export const initialState: IinitialState = {
  calendarDatas: {
    loading: false,
    calendarTickets: [],
  },
  upcomingDatas: {
    loading: false,
    upcomingTickets: { today: [], others: [] },
  },
};

export default function schedule(
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
