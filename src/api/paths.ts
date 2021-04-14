// [[ auth ]]
export const SIGN_IN_PATH = `/auth/login`;

// [[ ticket ]]
export const ADD_TICKET_PATH = `/tickets`;
export const GET_ALL_TICKETS_PATH = `/tickets`;

//[[ google image search ]]
const {
  REACT_APP_GOOGLE_IMAGE_SEARCH_KEY,
  REACT_APP_GOOGLE_IMAGE_SEARCH_ENGINE_ID,
} = process.env;

export const GOOGLE_IMAGE_SEARCH_PATH = `/v1?key=${REACT_APP_GOOGLE_IMAGE_SEARCH_KEY}&cx=${REACT_APP_GOOGLE_IMAGE_SEARCH_ENGINE_ID}&searchType=image`;
