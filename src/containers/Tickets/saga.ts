import { call, put, takeLatest } from 'redux-saga/effects';
import { patchTicketDataApi } from '../../api/request';
import {
  getAllTicketsRequest,
  getUpcomingTicketsRequest,
} from '../Schedule/actions';
import { IticketData } from '../Schedule/saga';
import { PATCH_TICKET_DATA_REQUEST } from './constants';
import { patchTicketDataSuccess } from './actions';

interface patchTicketProps {
  data: IticketData;
  type: string;
}

interface IpatchTicketResDatas {
  data: {
    statusCode: number;
    message: string;
    ticket: IticketData;
  };
}

function* patchTicketData(
  action: patchTicketProps,
): Generator<unknown, void, IpatchTicketResDatas> {
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
