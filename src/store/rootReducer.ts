import { combineReducers } from 'redux';
import signIn from '../containers/SignIn/reducer';
import sideMenu from '../containers/SideMenu/reducer';
import ticketInput from '../containers/TicketInput/reducer';
import calendar from '../containers/Calendar/reducer';
import statistics from '../containers/Statistics/reducer';

const rootReducer = combineReducers({
  signIn,
  sideMenu,
  ticketInput,
  calendar,
  statistics,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
