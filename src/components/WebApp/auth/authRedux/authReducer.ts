import { AuthActionTypes, AuthActions } from './authAction';

export interface AuthState {
  activeModal: string | null;
  email: string;
  code: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
  error: string | null;
  emailError: string | null;
  passwordError: string | null;
  resetPasswordFlow: boolean;
  newPasswordFlow: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const initialAuthState: AuthState = {
  activeModal: null,
  email: '',
  password: '',
  code: '',
  newPassword: '',
  confirmPassword: '',
  error: null,
  emailError: null,
  passwordError: null,
  resetPasswordFlow: false,
  newPasswordFlow: false,
  isAuthenticated: false,
  isLoading: false,
};

export const authReducer = (state = initialAuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        email: action.payload.email,
        password: action.payload.password,
      };
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case AuthActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionTypes.SIGN_UP_CODE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case AuthActionTypes.SIGN_UP_CODE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        activeModal: 'login',
        code: '',
        password: '',
        confirmPassword: '',
      };
    case AuthActionTypes.SIGN_UP_CODE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        email: action.payload.email,
        password: action.payload.password,
      };
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        error: null,
        activeModal: null,
        password: '',
      };
    case AuthActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    case AuthActionTypes.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        email: action.payload.email,
        resetPasswordFlow: true,
      };
    case AuthActionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case AuthActionTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionTypes.CONFIRM_FORGOT_CODE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case AuthActionTypes.CONFIRM_FORGOT_CODE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        newPasswordFlow: true,
      };
    case AuthActionTypes.CONFIRM_FORGOT_CODE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionTypes.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case AuthActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        resetPasswordFlow: false,
        newPasswordFlow: false,
        activeModal: 'login',
      };
    case AuthActionTypes.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...initialAuthState,
      };
    case AuthActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionTypes.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
        emailError: null,
        error: null,
      };
    case AuthActionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
        passwordError: null,
        error: null,
      };
    case AuthActionTypes.SET_CONFIRM_PASSWORD:
      return {
        ...state,
        passwordError: null,
      };

    default:
      return state;
  }
};
