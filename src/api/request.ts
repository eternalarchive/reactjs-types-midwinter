import * as PATHS from './paths';
import { authPost } from './http';
import { TsignInInfo } from '../containers/SignIn/saga';

// [[ auth ]]
export const postSignInApi = (data: TsignInInfo) =>
  authPost(PATHS.SIGN_IN_PATH, data);
