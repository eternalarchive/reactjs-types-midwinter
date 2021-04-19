import { call, put, takeLatest } from 'redux-saga/effects';
import { getStatisticsActorApi, getStatisticsViewApi } from '../../api/request';
import {
  GET_STATISTICS_ACTOR_REQUEST,
  GET_STATISTICS_VIEW_REQUEST,
} from './constants';
import { getStatisticsActorSuccess, getStatisticsViewSuccess } from './actions';
import { Tactor, Tview } from './reducer';

interface TactorResDatas {
  data: Tactor[];
}

interface TviewResDatas {
  data: Tview[];
}

interface getStatisticsProps {
  year: number;
  type: string;
}

function* getStatisticsActor(): Generator<unknown, void, TactorResDatas> {
  try {
    const response = yield call(getStatisticsActorApi);
    yield put(getStatisticsActorSuccess(response.data));
  } catch (error) {}
}

function* getStatisticsView(
  action: getStatisticsProps,
): Generator<unknown, void, TviewResDatas> {
  try {
    const response = yield call(getStatisticsViewApi, action.year);
    yield put(getStatisticsViewSuccess(response.data));
  } catch (error) {}
}

export function* statisticsSaga() {
  yield takeLatest(GET_STATISTICS_ACTOR_REQUEST, getStatisticsActor);
  yield takeLatest(GET_STATISTICS_VIEW_REQUEST, getStatisticsView);
}
