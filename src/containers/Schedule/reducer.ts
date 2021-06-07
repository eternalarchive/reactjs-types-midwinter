import produce from 'immer';
import { TypeActions } from './actions';
import {
  GET_ALL_TICKETS_REQUEST,
  GET_ALL_TICKETS_SUCCESS,
  GET_UPCOMING_TICKETS_REQUEST,
  GET_UPCOMING_TICKETS_SUCCESS,
} from './constants';
import { IticketData } from './saga';

interface IcalendarDatas {
  loading: boolean;
  calendarTickets: IticketData[] | [];
}

export interface IupcomingTickets {
  today: IticketData[] | [];
  others: IticketData[] | [];
}

interface IupcomingDatas {
  loading: boolean;
  upcomingTickets: IupcomingTickets;
}

interface IinitialState {
  calendarDatas: IcalendarDatas;
  upcomingDatas: IupcomingDatas;
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
