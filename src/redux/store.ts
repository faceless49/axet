import { combineReducers, createStore } from 'redux';

import { portfolioReducer } from './reducers/portfolio';
import { profileReducer } from './reducers/profile';

const rootReducer = combineReducers({
  profile: profileReducer,
  portfolio: portfolioReducer,
  //   exp: expReducer,
});

type RootReducerType = typeof rootReducer;
export type AppRootStateType = ReturnType<RootReducerType>;
//
// // @ts-ignore
//
export const store = createStore(rootReducer);
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
