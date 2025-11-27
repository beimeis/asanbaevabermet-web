// Local dependencies
import { AuthActionTypes } from './action';

export interface AuthState {
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  userToken: string | null;
}

export const initialState: AuthState = {
  loading: false,
  error: null,
  isLoggedIn: false,
  userToken: null,
};

export default function authReducer(state: AuthState = initialState, action: any): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        isLoggedIn: true,
        userToken: action.payload.token,
      };
    case AuthActionTypes.Logout:
      return {
        ...state,
        error: null,
        isLoggedIn: false,
        userToken: null,
      };

    default:
      return state;
  }
}
