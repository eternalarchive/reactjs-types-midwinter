import { combineReducers } from 'redux';
import signIn from '../containers/SignIn/reducer';
import sideMenu from '../containers/SideMenu/reducer';
import ticketInput from '../containers/TicketInput/reducer';

const rootReducer = combineReducers({
  signIn,
  sideMenu,
  ticketInput,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
