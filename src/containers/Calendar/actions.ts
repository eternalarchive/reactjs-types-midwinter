import {
  GET_ALL_TICKETS_REQUEST,
  GET_ALL_TICKETS_SUCCESS,
  GET_UPCOMING_TICKETS_REQUEST,
  GET_UPCOMING_TICKETS_SUCCESS,
} from './constants';
import { TticketData } from './saga';

export type TypeActions = ReturnType<
  | typeof getAllTicketsRequest
  | typeof getAllTicketsSuccess
  | typeof getUpcomingTicketsRequest
  | typeof getUpcomingTicketsSuccess
>;

export const getAllTicketsRequest = () => ({
  type: GET_ALL_TICKETS_REQUEST,
});

export const getAllTicketsSuccess = (data: TticketData[]) => ({
  type: GET_ALL_TICKETS_SUCCESS,
  data,
});

export const getUpcomingTicketsRequest = () => ({
  type: GET_UPCOMING_TICKETS_REQUEST,
});

export const getUpcomingTicketsSuccess = (data: any) => ({
  type: GET_UPCOMING_TICKETS_SUCCESS,
  data,
});
