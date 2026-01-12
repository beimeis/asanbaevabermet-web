import { UiActionTypes, UiActions } from './uiAction';

export type ModalType =
  | 'intro'
  | 'login'
  | 'signup'
  | 'password'
  | 'forgot-password'
  | 'reset-code'
  | 'new-password'
  | 'signup-code'
  | 'password-setup'
  | null;

export interface UiState {
  activeModal: ModalType;
  email: string;
  password: string;
  confirmPassword: string;
  emailError: string | null;
  passwordError: string | null;
  confirmError: string | null;
  isLoading: boolean;
  serverError: string | null;
}

export const initialState: UiState = {
  activeModal: null,
  email: '',
  password: '',
  confirmPassword: '',
  emailError: null,
  passwordError: null,
  confirmError: null,
  isLoading: false,
  serverError: null,
};

export const uiReducer = (state = initialState, action: UiActions): UiState => {
  switch (action.type) {
    case UiActionTypes.SET_ACTIVE_MODAL:
      return {
        ...state,
        activeModal: action.payload,
        emailError: null,
        passwordError: null,
        confirmError: null,
        serverError: null,
      };

    case UiActionTypes.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
        emailError: null,
      };

    case UiActionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
        passwordError: null,
      };

    case UiActionTypes.SET_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload,
        confirmError: null,
      };

    case UiActionTypes.VALIDATE_CREDENTIALS: {
      const errors = {
        emailError: null as string | null,
        passwordError: null as string | null,
        confirmError: null as string | null,
      };

      if (!state.email) {
        errors.emailError = 'Email обязателен';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
        errors.emailError = 'Некорректный email';
      }

      if (!state.password) {
        errors.passwordError = 'Пароль обязателен';
      } else if (state.password.length < 8) {
        errors.passwordError = 'Минимум 8 символов';
      } else if (!/[A-Z]/.test(state.password)) {
        errors.passwordError = 'Нужна хотя бы одна заглавная буква';
      } else if (!/[0-9]/.test(state.password)) {
        errors.passwordError = 'Нужна хотя бы одна цифра';
      }

      if (state.confirmPassword && state.password !== state.confirmPassword) {
        errors.confirmError = 'Пароли не совпадают';
      }

      return {
        ...state,
        ...errors,
      };
    }

    case UiActionTypes.RESET_FORM:
      return {
        ...initialState,
        activeModal: state.activeModal,
      };

    default:
      return state;
  }
};
