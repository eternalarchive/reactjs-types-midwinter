import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllTicketsApi } from '../../api/request';
import { GET_ALL_TICKETS_REQUEST } from './constants';
import { getAllTicketsSuccess } from './actions';

export interface TticketDatas {
  poster: string;
  category?: 'musical' | 'theater' | 'music-theater' | 'etc' | 'default';
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
  data: TticketDatas[];
}

function* getAllTickets(): Generator<unknown, void, TcalendarResDatas> {
  try {
    const response = yield call(getAllTicketsApi);
    yield put(getAllTicketsSuccess(response.data));
  } catch (error) {}
}

export function* calendarSaga() {
  yield takeLatest(GET_ALL_TICKETS_REQUEST, getAllTickets);
}
