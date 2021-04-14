import { call, put, takeLatest } from 'redux-saga/effects';
import { getGoogleImageApi, postAddTicketApi } from '../../api/request';
import {
  POST_ADD_TICKET_REQUEST,
  GET_SEARCH_POSTER_REQUEST,
} from './constants';
import { postAddTicketSuccess, getGoogleImgSuccess } from './actions';
import { Tposter } from './reducer';
import { TsubmitTicketDatas } from '.';

interface postAddTicketProps {
  data: TsubmitTicketDatas;
  type: string;
}

interface TpostAddTicketResDatas {
  data: {
    data: TsubmitTicketDatas;
  };
}

function* postAddTicket(
  action: postAddTicketProps,
): Generator<unknown, void, TpostAddTicketResDatas> {
  try {
    yield call(postAddTicketApi, action.data);
    yield put(postAddTicketSuccess());
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

export function* ticketInputSaga() {
  yield takeLatest(POST_ADD_TICKET_REQUEST, postAddTicket);
  yield takeLatest(GET_SEARCH_POSTER_REQUEST, getGoogleImg);
}
