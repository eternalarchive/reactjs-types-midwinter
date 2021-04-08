import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
