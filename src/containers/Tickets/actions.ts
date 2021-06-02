import { IticketData } from '../Schedule/saga';
import {
  PATCH_TICKET_DATA_REQUEST,
  PATCH_TICKET_DATA_SUCCESS,
} from './constants';

export type TypeActions = ReturnType<
  typeof patchTicketDataRequest | typeof patchTicketDataSuccess
>;

export const patchTicketDataRequest = (data: IticketData) => ({
  type: PATCH_TICKET_DATA_REQUEST,
  data,
});

export const patchTicketDataSuccess = () => ({
  type: PATCH_TICKET_DATA_SUCCESS,
});
