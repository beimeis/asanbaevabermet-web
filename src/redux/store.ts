/* External dependencies */
import { applyMiddleware, combineReducers, createStore as createReduxStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

/* Local dependencies */
import getDevices from '../components/devices/getDevices/redux/reducer';
import { authReducer } from '../components/WebApp/auth/authRedux/authReducer';
import { uiReducer } from '../components/WebApp/auth/Modal/uiRedux/uiReducer';
import { signUpEpic, signUpConfirmCodeEpic } from '../components/WebApp/auth/authRedux/Epic';

const rootEpic = combineEpics(signUpEpic, signUpConfirmCodeEpic);

const rootReducer = combineReducers({
  getDevices,
  auth: authReducer,
  ui: uiReducer,
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
