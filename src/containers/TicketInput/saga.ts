import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getGoogleImageApi,
  postAddTicketApi,
  deleteTicketApi,
} from '../../api/request';
import {
  getAllTicketsRequest,
  getUpcomingTicketsRequest,
} from '../Calendar/actions';
import { TticketData } from '../Calendar/saga';
import {
  POST_ADD_TICKET_REQUEST,
  GET_SEARCH_POSTER_REQUEST,
  DELETE_TICKET_REQUEST,
} from './constants';
import {
  postAddTicketSuccess,
  getGoogleImgSuccess,
  deleteTicketSuccess,
} from './actions';
import { Tposter } from './reducer';

interface postAddTicketProps {
  data: TticketData;
  type: string;
}

interface TpostAddTicketResDatas {
  data: {
    data: TticketData;
  };
}

function* postAddTicket(
  action: postAddTicketProps,
): Generator<unknown, void, TpostAddTicketResDatas> {
  try {
    yield call(postAddTicketApi, action.data);
    yield put(postAddTicketSuccess());
    yield put(getAllTicketsRequest());
    yield put(getUpcomingTicketsRequest());
  } catch (error) {
    throw new Error('티켓 등록 실패');
  }
}

interface getGoogleImgProps {
  searchQuery: string;
  type: string;
}

interface TgetGoogleImgResDatas {
  data: {
    items: Tposter[];
  };
}

function* getGoogleImg(
  action: getGoogleImgProps,
): Generator<unknown, void, TgetGoogleImgResDatas> {
  try {
    const response = yield call(getGoogleImageApi, action.searchQuery);
    yield put(getGoogleImgSuccess(response.data.items));
  } catch (error) {
    throw new Error('포스터 로딩 실패');
  }
}

interface deleteTicketProps {
  id: string;
  type: string;
}

interface TdeleteTicketResDatas {
  data: any;
}

function* deleteTicket(
  action: deleteTicketProps,
): Generator<unknown, void, TdeleteTicketResDatas> {
  try {
    yield call(deleteTicketApi, action.id);
    yield put(deleteTicketSuccess());
    yield put(getAllTicketsRequest());
    yield put(getUpcomingTicketsRequest());
  } catch (error) {
    throw new Error('티켓 삭제 실패');
  }
}

export function* ticketInputSaga() {
  yield takeLatest(POST_ADD_TICKET_REQUEST, postAddTicket);
  yield takeLatest(GET_SEARCH_POSTER_REQUEST, getGoogleImg);
  yield takeLatest(DELETE_TICKET_REQUEST, deleteTicket);
}
