// [[ auth ]]
export const SIGN_IN_PATH = `/auth/login`;

// [[ ticket ]]
export const ADD_TICKET_PATH = `/tickets`;
export const GET_ALL_TICKETS_PATH = `/tickets`;
export const GET_UPCOMING_TICKETS_PATH = `/tickets/upcoming_list`;
export const GET_STATISTICS_ACTOR_PATH = `/tickets/statistics/actor`;
export const GET_STATISTICS_VIEW_PATH = `/tickets/statistics/view`;
export const PATCH_TICKET_DATA_PATH = `/tickets`;
export const DELETE_TICKET_DATA_PATH = `/tickets`;

//[[ google image search ]]
const {
  REACT_APP_GOOGLE_IMAGE_SEARCH_KEY,
  REACT_APP_GOOGLE_IMAGE_SEARCH_ENGINE_ID,
} = process.env;

export const GOOGLE_IMAGE_SEARCH_PATH = `/v1?key=${REACT_APP_GOOGLE_IMAGE_SEARCH_KEY}&cx=${REACT_APP_GOOGLE_IMAGE_SEARCH_ENGINE_ID}&searchType=image`;
