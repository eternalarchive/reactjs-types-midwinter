import { combineReducers } from 'redux';
import signIn from '../containers/SignIn/reducer';
import sideMenu from '../containers/SideMenu/reducer';
import ticketInput from '../containers/TicketInput/reducer';
import schedule from '../containers/Schedule/reducer';
import statistics from '../containers/Statistics/reducer';
import tickets from '../containers/Tickets/reducer';

const rootReducer = combineReducers({
  signIn,
  sideMenu,
  ticketInput,
  schedule,
  statistics,
  tickets,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
