import { combineReducers } from 'redux';
import signIn from '../containers/SignIn/reducer';
import sideMenu from '../containers/SideMenu/reducer';
import ticketInput from '../containers/TicketInput/reducer';
import calendar from '../containers/Calendar/reducer';

const rootReducer = combineReducers({
  signIn,
  sideMenu,
  ticketInput,
  calendar,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
