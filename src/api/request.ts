import * as PATHS from './paths';
import { authPost, post, imgGet } from './http';
import { TsignInInfo } from '../containers/SignIn/saga';
import { TsubmitTicketDatas } from '../containers/TicketInput';

// [[ auth ]]
export const postSignInApi = (data: TsignInInfo) =>
  authPost(PATHS.SIGN_IN_PATH, data);

// [[ ticket ]]
export const postAddTicketApi = (data: TsubmitTicketDatas) =>
  post(PATHS.ADD_TICKET_PATH, data);

// [[ google ]]
export const getGoogleImageApi = (searchQuery: string) =>
  imgGet(`${PATHS.GOOGLE_IMAGE_SEARCH_PATH}&q=${searchQuery}`);
