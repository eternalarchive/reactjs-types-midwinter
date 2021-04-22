import dayjs from 'dayjs';
import produce from 'immer';
import { TypeActions } from './actions';
import {
  SHOW_TICKET_INPUT_FORM,
  HIDE_TICKET_INPUT_FORM,
  POST_ADD_TICKET_REQUEST,
  POST_ADD_TICKET_SUCCESS,
  GET_SEARCH_POSTER_REQUEST,
  GET_SEARCH_POSTER_SUCCESS,
} from './constants';

export interface Tposter {
  link: string;
  title: string;
}

interface TformState {
  isOpen: boolean;
  loading: boolean;
  posters: Tposter[] | null;
}

interface IinitialState {
  formState: TformState;
  ticketState: any | null;
}

export const initialState: IinitialState = {
  formState: {
    isOpen: false,
    posters: null,
    loading: false,
  },
  ticketState: { isModify: false },
};

function ticketInput(state: IinitialState = initialState, action: TypeActions) {
  return produce(state, draftState => {
    switch (action.type) {
      case SHOW_TICKET_INPUT_FORM:
        document.body.style.overflow = 'hidden';
        draftState.formState.isOpen = true;
        draftState.ticketState = action.data;
        break;
      case HIDE_TICKET_INPUT_FORM:
        document.body.style.overflow = '';
        draftState.formState.isOpen = false;
        draftState.ticketState = { isModify: false };
        draftState.formState.posters = null;
        break;
      case POST_ADD_TICKET_REQUEST:
        draftState.formState.loading = true;
        break;
      case POST_ADD_TICKET_SUCCESS:
        draftState.formState.loading = false;
        break;
      case GET_SEARCH_POSTER_REQUEST:
        draftState.formState.loading = true;
        break;
      case GET_SEARCH_POSTER_SUCCESS:
        draftState.formState.loading = false;
        draftState.formState.posters = action.posters;
        break;
      default:
        return draftState;
    }
  });
}

export default ticketInput;
