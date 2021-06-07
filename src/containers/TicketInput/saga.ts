import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getGoogleImageApi,
  postAddTicketApi,
  deleteTicketApi,
} from '../../api/request';
import {
  getAllTicketsRequest,
  getUpcomingTicketsRequest,
} from '../Schedule/actions';
import { IticketData } from '../Schedule/saga';
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
import { Iposter } from './reducer';

interface postAddTicketProps {
  data: IticketData;
  type: string;
}

interface IpostAddTicketResDatas {
  data: {
    data: IticketData;
  };
}

function* postAddTicket(
  action: postAddTicketProps,
): Generator<unknown, void, IpostAddTicketResDatas> {
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

interface IgetGoogleImgResDatas {
  data: {
    items: Iposter[];
  };
}

function* getGoogleImg(
  action: getGoogleImgProps,
): Generator<unknown, void, IgetGoogleImgResDatas> {
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

interface IdeleteTicketResDatas {
  data: {
    statusCode: number;
    message: string;
  };
}

function* deleteTicket(
  action: deleteTicketProps,
): Generator<unknown, void, IdeleteTicketResDatas> {
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
