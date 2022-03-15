import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { portfolioReducer } from './reducers/portfolio';
import { profileReducer } from './reducers/profile';

const rootReducer = combineReducers({
  profile: profileReducer,
  portfolio: portfolioReducer,
});

type RootReducerType = typeof rootReducer;
export type AppRootStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
