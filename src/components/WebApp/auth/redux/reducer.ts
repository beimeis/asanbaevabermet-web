import { AuthActionTypes, AuthActions } from './action';

export interface AuthState {
  isIntroModalOpen: boolean;
  isLoginModalOpen: boolean;
  isSignupModalOpen: boolean;
  isLoading: boolean;
  error: string | null;
  email: string;
  password: string;
  confirmPassword: string;
  hasEmailError: boolean;
  hasPasswordError: boolean;
  hasConfirmPasswordError: boolean;
  signupStep: 'register' | 'confirm';
}

export const initialState: AuthState = {
  isIntroModalOpen: false,
  isLoginModalOpen: false,
  isSignupModalOpen: false,
  isLoading: false,
  error: null,
  email: '',
  password: '',
  confirmPassword: '',
  hasEmailError: false,
  hasPasswordError: false,
  hasConfirmPasswordError: false,
  signupStep: 'register',
};

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.OPEN_INTRO_MODAL:
      return { ...state, isIntroModalOpen: true, isLoginModalOpen: false, isSignupModalOpen: false };

    case AuthActionTypes.CLOSE_INTRO_MODAL:
      return { ...state, isIntroModalOpen: false };

    case AuthActionTypes.OPEN_LOGIN_MODAL:
      return { ...state, isIntroModalOpen: false, isLoginModalOpen: true, isSignupModalOpen: false };

    case AuthActionTypes.CLOSE_LOGIN_MODAL:
      return { ...state, isLoginModalOpen: false };

    case AuthActionTypes.OPEN_SIGNUP_MODAL:
      return { ...state, isIntroModalOpen: false, isSignupModalOpen: true, isLoginModalOpen: false };

    case AuthActionTypes.CLOSE_SIGNUP_MODAL:
      return { ...state, isSignupModalOpen: false };

    case AuthActionTypes.SET_EMAIL:
      return { ...state, email: action.payload, hasEmailError: false };

    case AuthActionTypes.SET_PASSWORD:
      return { ...state, password: action.payload, hasPasswordError: false };

    case AuthActionTypes.SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload, hasConfirmPasswordError: false };

    case AuthActionTypes.SET_SIGNUP_STEP:
      return { ...state, signupStep: action.payload };

    case AuthActionTypes.VALIDATE_CREDENTIALS: {
      const email = state.email.trim();
      const password = state.password;
      const confirmPassword = state.confirmPassword;

      let hasEmailError = false;
      let hasPasswordError = false;
      let hasConfirmPasswordError = false;

      const emailRegex = /^[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email || !emailRegex.test(email)) hasEmailError = true;

      if (
        password.length < 8 ||
        !/[A-Z]/.test(password) ||
        !/[a-z0-9]/.test(password) ||
        !/[~#@$%&!*_?^-]/.test(password)
      ) {
        hasPasswordError = true;
      }

      if ((confirmPassword && password !== confirmPassword) || (password && !confirmPassword)) {
        hasConfirmPasswordError = true;
      }

      if (hasEmailError || hasPasswordError || hasConfirmPasswordError) {
        return {
          ...state,
          hasEmailError,
          hasPasswordError,
          hasConfirmPasswordError,
        };
      }

      // Всё ок — идём дальше
      return {
        ...state,
        hasEmailError: false,
        hasPasswordError: false,
        hasConfirmPasswordError: false,
        signupStep: 'confirm',
      };
    }

    case AuthActionTypes.OPEN_INTRO_FROM_LOGIN:
      return {
        ...state,
        isIntroModalOpen: true,
        isLoginModalOpen: false,
        hasEmailError: false,
        hasPasswordError: false,
        email: '',
        password: '',
      };

    case AuthActionTypes.OPEN_INTRO_FROM_SIGNUP:
      return {
        ...state,
        isIntroModalOpen: true,
        isSignupModalOpen: false,
        hasEmailError: false,
        hasPasswordError: false,
        hasConfirmPasswordError: false,
        email: '',
        password: '',
        confirmPassword: '',
      };
    case AuthActionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AuthActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signupStep: 'confirm' as const,
      };

    case AuthActionTypes.SIGNUP_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionTypes.CONFIRM_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AuthActionTypes.CONFIRM_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignupModalOpen: false,
        signupStep: 'register' as const,
        email: '',
        password: '',
        confirmPassword: '',
        hasEmailError: false,
        hasPasswordError: false,
        hasConfirmPasswordError: false,
        error: null,
      };

    case AuthActionTypes.CONFIRM_SIGNUP_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionTypes.RESEND_SIGNUP_CODE:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    default:
      return state;
  }
};
