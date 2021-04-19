import * as PATHS from './paths';
import { authPost, post, get, imgGet } from './http';
import { TsignInInfo } from '../containers/SignIn/saga';
import { TsubmitTicketDatas } from '../containers/TicketInput';

// [[ auth ]]
export const postSignInApi = (data: TsignInInfo) =>
  authPost(PATHS.SIGN_IN_PATH, data);

// [[ ticket ]]
export const postAddTicketApi = (data: TsubmitTicketDatas) =>
  post(PATHS.ADD_TICKET_PATH, data);

export const getAllTicketsApi = () => get(PATHS.GET_ALL_TICKETS_PATH);
export const getUpcomingTicketsApi = () => get(PATHS.GET_UPCOMING_TICKETS_PATH);

export const getStatisticsActorApi = () => get(PATHS.GET_STATISTICS_ACTOR_PATH);
export const getStatisticsViewApi = (year: number) =>
  get(`${PATHS.GET_STATISTICS_VIEW_PATH}/${year}`);

// [[ google ]]
export const getGoogleImageApi = (searchQuery: string) =>
  imgGet(`${PATHS.GOOGLE_IMAGE_SEARCH_PATH}&q=${searchQuery}`);
