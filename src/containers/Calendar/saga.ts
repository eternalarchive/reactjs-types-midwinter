import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllTicketsApi, getUpcomingTicketsApi } from '../../api/request';
import {
  GET_ALL_TICKETS_REQUEST,
  GET_UPCOMING_TICKETS_REQUEST,
} from './constants';
import { getAllTicketsSuccess, getUpcomingTicketsSuccess } from './actions';

export interface TticketData {
  _id?: string;
  poster: string;
  category: 'musical' | 'theater' | 'music-theater' | 'etc' | 'default';
  title: string;
  schedule: string;
  place?: string;
  seat?: string;
  price?: number;
  casting?: string[];
  discount_type?: string;
  memo?: string;
}

interface TcalendarResDatas {
  data: TticketData[];
}

function* getAllTickets(): Generator<unknown, void, TcalendarResDatas> {
  try {
    const response = yield call(getAllTicketsApi);
    yield put(getAllTicketsSuccess(response.data));
  } catch (error) {}
}

function* getUpcomingTickets(): Generator<unknown, void, TcalendarResDatas> {
  try {
    const response = yield call(getUpcomingTicketsApi);
    yield put(getUpcomingTicketsSuccess(response.data));
  } catch (error) {}
}

export function* calendarSaga() {
  yield takeLatest(GET_ALL_TICKETS_REQUEST, getAllTickets);
  yield takeLatest(GET_UPCOMING_TICKETS_REQUEST, getUpcomingTickets);
}
