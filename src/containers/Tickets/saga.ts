import { call, put, takeLatest } from 'redux-saga/effects';
import { patchTicketDataApi } from '../../api/request';
import {
  getAllTicketsRequest,
  getUpcomingTicketsRequest,
} from '../Schedule/actions';
import { TticketData } from '../Schedule/saga';
import { PATCH_TICKET_DATA_REQUEST } from './constants';
import { patchTicketDataSuccess } from './actions';

interface patchTicketProps {
  data: TticketData;
  type: string;
}

interface TpatchTicketResDatas {
  data: {
    statusCode: number;
    message: string;
    ticket: TticketData;
  };
}

function* patchTicketData(
  action: patchTicketProps,
): Generator<unknown, void, TpatchTicketResDatas> {
  try {
    yield call(patchTicketDataApi, action.data);
    yield put(patchTicketDataSuccess());
    yield put(getAllTicketsRequest());
    yield put(getUpcomingTicketsRequest());
  } catch (error) {
    throw new Error('티켓 업데이트 실패');
  }
}

export function* ticketsSaga() {
  yield takeLatest(PATCH_TICKET_DATA_REQUEST, patchTicketData);
}
