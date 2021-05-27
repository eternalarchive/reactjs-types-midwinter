import { TticketData } from '../Schedule/saga';
import {
  PATCH_TICKET_DATA_REQUEST,
  PATCH_TICKET_DATA_SUCCESS,
} from './constants';

export type TypeActions = ReturnType<
  typeof patchTicketDataRequest | typeof patchTicketDataSuccess
>;

export const patchTicketDataRequest = (data: TticketData) => ({
  type: PATCH_TICKET_DATA_REQUEST,
  data,
});

export const patchTicketDataSuccess = () => ({
  type: PATCH_TICKET_DATA_SUCCESS,
});
