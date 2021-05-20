import * as PATHS from './paths';
import { TsignInInfo } from '../containers/SignIn/saga';
import { TticketData } from '../containers/Calendar/saga';
import { authPost, post, get, patch, imgGet, remove } from './http';

// [[ auth ]]
export const postSignInApi = (data: TsignInInfo) =>
  authPost(PATHS.SIGN_IN_PATH, data);

// [[ ticket ]]
export const postAddTicketApi = (data: TticketData) =>
  post(PATHS.ADD_TICKET_PATH, data);

export const getAllTicketsApi = () => get(PATHS.GET_ALL_TICKETS_PATH);
export const getUpcomingTicketsApi = () => get(PATHS.GET_UPCOMING_TICKETS_PATH);

export const getStatisticsActorApi = () => get(PATHS.GET_STATISTICS_ACTOR_PATH);
export const getStatisticsViewApi = (year: number) =>
  get(`${PATHS.GET_STATISTICS_VIEW_PATH}/${year}`);

export const patchTicketDataApi = (data: TticketData) =>
  patch(`${PATHS.PATCH_TICKET_DATA_PATH}/${data._id}`, data);
export const deleteTicketApi = (id: string) =>
  remove(`${PATHS.DELETE_TICKET_DATA_PATH}/${id}`);

// [[ google ]]
export const getGoogleImageApi = (searchQuery: string) =>
  imgGet(`${PATHS.GOOGLE_IMAGE_SEARCH_PATH}&q=${searchQuery}`);
