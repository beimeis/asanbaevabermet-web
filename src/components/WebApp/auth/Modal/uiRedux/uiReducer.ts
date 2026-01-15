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
  error: string | null;
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
  error: null,
};

export const uiReducer = (state = initialState, action: UiActions): UiState => {
  switch (action.type) {
    case UiActionTypes.SET_ACTIVE_MODAL:
      if (action.payload === null) {
        return {
          ...initialState,
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
      return {
        ...state,
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
