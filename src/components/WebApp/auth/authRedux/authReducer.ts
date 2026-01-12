import { AuthActionTypes, AuthActions } from './authAction';

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated';

export interface AuthState {
  status: AuthStatus;
  user: any | null;
  error: string | null;
  isAuthenticated: boolean;
}

export const initialAuthState: AuthState = {
  status: 'unauthenticated',
  user: null,
  error: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialAuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SIGN_UP_REQUEST:
    case AuthActionTypes.CONFIRM_SIGN_UP_REQUEST:
    case AuthActionTypes.SIGN_IN_REQUEST:
    case AuthActionTypes.FORGOT_PASSWORD_REQUEST:
    case AuthActionTypes.CONFIRM_FORGOT_CODE_REQUEST:
    case AuthActionTypes.RESET_PASSWORD_REQUEST:
    case AuthActionTypes.SIGN_OUT_REQUEST:
      return { ...state, status: 'loading', error: null };

    case AuthActionTypes.SET_AUTH_STATUS:
      return { ...state, status: action.payload };

    case AuthActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        status: action.payload ? 'authenticated' : 'unauthenticated',
      };

    default:
      return state;
  }
};
