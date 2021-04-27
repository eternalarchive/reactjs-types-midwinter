import { TticketData } from '../Calendar/saga';
import {
  SHOW_TICKET_INPUT_FORM,
  HIDE_TICKET_INPUT_FORM,
  POST_ADD_TICKET_REQUEST,
  POST_ADD_TICKET_SUCCESS,
  GET_SEARCH_POSTER_REQUEST,
  GET_SEARCH_POSTER_SUCCESS,
} from './constants';
import { Tposter } from './reducer';

export type TypeActions = ReturnType<
  | typeof showTicketInputForm
  | typeof hideTicketInputForm
  | typeof postAddTicketRequest
  | typeof postAddTicketSuccess
  | typeof getGoogleImgRequest
  | typeof getGoogleImgSuccess
>;

export const showTicketInputForm = (data: any) => ({
  type: SHOW_TICKET_INPUT_FORM,
  data,
});

export const hideTicketInputForm = () => ({
  type: HIDE_TICKET_INPUT_FORM,
});

export const postAddTicketRequest = (data: TticketData) => ({
  type: POST_ADD_TICKET_REQUEST,
  data,
});

export const postAddTicketSuccess = () => ({
  type: POST_ADD_TICKET_SUCCESS,
});

export const getGoogleImgRequest = (searchQuery: string) => ({
  type: GET_SEARCH_POSTER_REQUEST,
  searchQuery,
});

export const getGoogleImgSuccess = (posters: Tposter[]) => ({
  type: GET_SEARCH_POSTER_SUCCESS,
  posters,
});
