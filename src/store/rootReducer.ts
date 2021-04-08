import { combineReducers } from 'redux';
import signIn from '../containers/SignIn/reducer';

const rootReducer = combineReducers({
  signIn,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
