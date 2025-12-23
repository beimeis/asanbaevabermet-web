import { AuthActionTypes, AuthActions } from './action';

export interface AuthState {
  email: string;
  password: string;
  confirmPassword: string;
  hasEmailError: boolean;
  hasPasswordError: boolean;
  hasConfirmPasswordError: boolean;
  isModalOpen: boolean;
  currentView: string;
  currentStep: string;
}

export const initialState: AuthState = {
  email: '',
  password: '',
  confirmPassword: '',
  hasEmailError: false,
  hasPasswordError: false,
  hasConfirmPasswordError: false,
  isModalOpen: false,
  currentView: 'intro',
  currentStep: 'register',
};

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.OPEN_MODAL:
      return { ...state, isModalOpen: true, currentView: action.payload.view || 'register' };

    case AuthActionTypes.CLOSE_MODAL:
      return initialState;

    case AuthActionTypes.SET_MODAL_VIEW:
      return { ...state, currentView: action.payload, currentStep: 'register' };

    case AuthActionTypes.SET_MODAL_STEP:
      return { ...state, currentStep: action.payload };

    case AuthActionTypes.SET_EMAIL:
      return { ...state, email: action.payload, hasEmailError: false };

    case AuthActionTypes.SET_PASSWORD:
      return { ...state, password: action.payload, hasPasswordError: false };

    case AuthActionTypes.SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload, hasConfirmPasswordError: false };

    case AuthActionTypes.VALIDATE_CREDENTIALS: {
      const email = state.email.trim();
      const password = state.password.trim();
      const confirmPassword = state.confirmPassword.trim();

      let hasEmailError = false;
      let hasPasswordError = false;
      let hasConfirmPasswordError = false;

      const emailRegex = /^[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email || !emailRegex.test(email)) {
        hasEmailError = true;
      }

      if (
        password.length < 8 ||
        !/[A-Z]/.test(password) ||
        !/[a-z0-9]/.test(password) ||
        !/[~#@$%&!*_?^-]/.test(password)
      ) {
        hasPasswordError = true;
      }
      if (!confirmPassword || password !== confirmPassword) {
        hasConfirmPasswordError = true;
      }

      if (hasEmailError || hasPasswordError || hasConfirmPasswordError) {
        return { ...state, hasEmailError, hasPasswordError, hasConfirmPasswordError };
      }
      return {
        ...state,
        hasEmailError: false,
        hasPasswordError: false,
        hasConfirmPasswordError: false,
        currentStep: 'confirm',
      };
    }

    case AuthActionTypes.RESET_REGISTRATION: {
      return {
        ...state,
        email: '',
        password: '',
        confirmPassword: '',
        hasEmailError: false,
        hasPasswordError: false,
        hasConfirmPasswordError: false,
        currentStep: 'register',
      };
    }

    default:
      return state;
  }
};
