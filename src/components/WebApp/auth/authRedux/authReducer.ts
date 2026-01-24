import { AuthActionTypes, AuthActions, ModalType } from './authAction';

export interface AuthState {
  activeModal: ModalType;
  email: string;
  code: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
  error: string | null;
  emailError: string | null;
  passwordError: string | null;
  confirmError: string | null;
  resetPasswordFlow: boolean;
  newPasswordFlow: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const savedEmail = typeof window !== 'undefined' ? localStorage.getItem('email') : null;
const savedIsAuthenticated = typeof window !== 'undefined' ? localStorage.getItem('isAuthenticated') === 'true' : false;

export const initialAuthState: AuthState = {
  activeModal: null,
  email: savedEmail || '',
  password: '',
  code: '',
  newPassword: '',
  confirmPassword: '',
  error: null,
  emailError: null,
  passwordError: null,
  confirmError: null,
  resetPasswordFlow: false,
  newPasswordFlow: false,
  isAuthenticated: savedIsAuthenticated,
  isLoading: false,
};

export const authReducer = (state = initialAuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_ACTIVE_MODAL:
      if (action.payload === null) {
        return {
          ...initialAuthState,
          activeModal: null,
        };
      }
      return {
        ...state,
        activeModal: action.payload,
        error: null,
        emailError: null,
        passwordError: null,
      };

    case AuthActionTypes.SET_SIGNUP_FLOW:
      return {
        ...state,
      };

    case AuthActionTypes.SET_RECOVERY_FLOW:
      return {
        ...state,
        resetPasswordFlow: action.payload,
      };

    case AuthActionTypes.RESET_FORM:
      return {
        ...initialAuthState,
        activeModal: state.activeModal,
      };

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

    case AuthActionTypes.CONFIRM_SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case AuthActionTypes.CONFIRM_SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        code: '',
        confirmPassword: '',
      };

    case AuthActionTypes.CONFIRM_SIGN_UP_FAILURE:
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

    case AuthActionTypes.CONFIRM_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case AuthActionTypes.CONFIRM_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        resetPasswordFlow: false,
        activeModal: 'login',
        password: '',
        code: '',
        isAuthenticated: false,
      };
    case AuthActionTypes.CONFIRM_PASSWORD_FAILURE:
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
        activeModal: 'reset-code',
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
        isAuthenticated: false,
        email: '',
        activeModal: null,
        error: null,
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
        confirmPassword: action.payload,
        passwordError: null,
        confirmError: null,
      };

    case AuthActionTypes.SET_CODE:
      return {
        ...state,
        code: action.payload,
        error: null,
      };

    case AuthActionTypes.VALIDATE_CREDENTIALS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
