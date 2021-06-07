import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { getStatisticsActorApi, getStatisticsViewApi } from '../../api/request';
import {
  GET_STATISTICS_ACTOR_REQUEST,
  GET_STATISTICS_VIEW_REQUEST,
} from './constants';
import { getStatisticsActorSuccess, getStatisticsViewSuccess } from './actions';
import { Iactor, Iview } from './reducer';

interface IactorResDatas {
  data: Iactor[];
}

interface IviewResDatas {
  data: Iview[];
}

interface getStatisticsProps {
  year: number;
  type: string;
}

function* getStatisticsActor(): Generator<unknown, void, IactorResDatas> {
  try {
    const response = yield call(getStatisticsActorApi);
    yield delay(50);
    yield put(getStatisticsActorSuccess(response.data));
  } catch (error) {}
}

function* getStatisticsView(
  action: getStatisticsProps,
): Generator<unknown, void, IviewResDatas> {
  try {
    const response = yield call(getStatisticsViewApi, action.year);
    yield put(getStatisticsViewSuccess(response.data));
  } catch (error) {}
}

export function* statisticsSaga() {
  yield takeLatest(GET_STATISTICS_ACTOR_REQUEST, getStatisticsActor);
  yield takeLatest(GET_STATISTICS_VIEW_REQUEST, getStatisticsView);
}
