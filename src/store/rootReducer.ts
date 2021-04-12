import { combineReducers } from 'redux';
import signIn from '../containers/SignIn/reducer';
import sideMenu from '../containers/SideMenu/reducer';

const rootReducer = combineReducers({
  signIn,
  sideMenu,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
