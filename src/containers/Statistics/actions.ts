import {
  GET_STATISTICS_ACTOR_REQUEST,
  GET_STATISTICS_ACTOR_SUCCESS,
  GET_STATISTICS_VIEW_REQUEST,
  GET_STATISTICS_VIEW_SUCCESS,
} from './constants';
import { Tactor, Tview } from './reducer';

export type TypeActions = ReturnType<
  | typeof getStatisticsActorRequest
  | typeof getStatisticsActorSuccess
  | typeof getStatisticsViewRequest
  | typeof getStatisticsViewSuccess
>;

export const getStatisticsActorRequest = () => ({
  type: GET_STATISTICS_ACTOR_REQUEST,
});

export const getStatisticsActorSuccess = (data: Tactor[]) => ({
  type: GET_STATISTICS_ACTOR_SUCCESS,
  data,
});

export const getStatisticsViewRequest = (year: number) => ({
  type: GET_STATISTICS_VIEW_REQUEST,
  year,
});

export const getStatisticsViewSuccess = (data: Tview[]) => ({
  type: GET_STATISTICS_VIEW_SUCCESS,
  data,
});
