import { GET_ALL_TICKETS_REQUEST, GET_ALL_TICKETS_SUCCESS } from './constants';
import { TticketDatas } from './saga';

export type TypeActions = ReturnType<
  typeof getAllTicketsRequest | typeof getAllTicketsSuccess
>;

export const getAllTicketsRequest = () => ({
  type: GET_ALL_TICKETS_REQUEST,
});
export const getAllTicketsSuccess = (data: TticketDatas[]) => ({
  type: GET_ALL_TICKETS_SUCCESS,
  data,
});
