import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { getAllTicketsApi, getUpcomingTicketsApi } from '../../api/request';
import {
  GET_ALL_TICKETS_REQUEST,
  GET_UPCOMING_TICKETS_REQUEST,
} from './constants';
import { getAllTicketsSuccess, getUpcomingTicketsSuccess } from './actions';
import { IupcomingTickets } from './reducer';

export interface IticketData {
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

interface IscheduleResDatas {
  data: IticketData[];
}

interface IupcomingResDatas {
  data: IupcomingTickets;
}

function* getAllTickets(): Generator<unknown, void, IscheduleResDatas> {
  try {
    const response = yield call(getAllTicketsApi);
    yield delay(50);
    yield put(getAllTicketsSuccess(response.data));
  } catch (error) {}
}

function* getUpcomingTickets(): Generator<unknown, void, IupcomingResDatas> {
  try {
    const response = yield call(getUpcomingTicketsApi);
    yield put(getUpcomingTicketsSuccess(response.data));
  } catch (error) {}
}

export function* scheduleSaga() {
  yield takeLatest(GET_ALL_TICKETS_REQUEST, getAllTickets);
  yield takeLatest(GET_UPCOMING_TICKETS_REQUEST, getUpcomingTickets);
}
