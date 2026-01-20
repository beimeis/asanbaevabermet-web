/* External dependencies */
import { applyMiddleware, combineReducers, createStore as createReduxStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

/* Local dependencies */
import getDevices from '../components/devices/getDevices/redux/reducer';
import { authReducer } from '../components/WebApp/auth/authRedux/authReducer';
import {
  signUpEpic,
  signUpSuccessEpic,
  signUpConfirmCodeEpic,
  signInEpic,
  signUpRedirectEpic,
  forgotPasswordEpic,
  confirmPasswordEpic,
  signOutEpic,
} from '../components/WebApp/auth/authRedux/Epic';

const rootEpic = combineEpics(
  signUpEpic,
  signUpSuccessEpic,
  signUpConfirmCodeEpic,
  signInEpic,
  signUpRedirectEpic,
  forgotPasswordEpic,
  confirmPasswordEpic,
  signOutEpic,
);

const rootReducer = combineReducers({
  getDevices,
  auth: authReducer,
});

let store;

export function createStore(): Store {
  const epicMiddleware = createEpicMiddleware();
  store = createReduxStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
