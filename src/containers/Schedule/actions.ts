import {
  GET_ALL_TICKETS_REQUEST,
  GET_ALL_TICKETS_SUCCESS,
  GET_UPCOMING_TICKETS_REQUEST,
  GET_UPCOMING_TICKETS_SUCCESS,
} from './constants';
import { IupcomingTickets } from './reducer';
import { IticketData } from './saga';

export type TypeActions = ReturnType<
  | typeof getAllTicketsRequest
  | typeof getAllTicketsSuccess
  | typeof getUpcomingTicketsRequest
  | typeof getUpcomingTicketsSuccess
>;

export const getAllTicketsRequest = () => ({
  type: GET_ALL_TICKETS_REQUEST,
});

export const getAllTicketsSuccess = (data: IticketData[]) => ({
  type: GET_ALL_TICKETS_SUCCESS,
  data,
});

export const getUpcomingTicketsRequest = () => ({
  type: GET_UPCOMING_TICKETS_REQUEST,
});

export const getUpcomingTicketsSuccess = (data: IupcomingTickets) => ({
  type: GET_UPCOMING_TICKETS_SUCCESS,
  data,
});
