import { AuthActionTypes, AuthActions } from './action';

export interface AuthState {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
  isModalOpen: boolean;
  currentView: string;
}

export const initialState: AuthState = {
  email: '',
  password: '',
  loading: false,
  error: null,
  isModalOpen: false,
  currentView: 'intro',
};

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.OPEN_MODAL:
      return { ...state, isModalOpen: true, currentView: action.payload.view || 'intro' };

    case AuthActionTypes.CLOSE_MODAL:
      return { ...state, isModalOpen: false, currentView: 'intro' };

    case AuthActionTypes.SET_MODAL_VIEW:
      return { ...state, currentView: action.payload };

    case AuthActionTypes.SET_EMAIL:
      return { ...state, email: action.email, error: null };

    case AuthActionTypes.SET_PASSWORD:
      return { ...state, password: action.password, error: null };

    case AuthActionTypes.SIGN_UP_REQUEST:
      return { ...state, loading: true, error: null };

    case AuthActionTypes.SIGN_UP_SUCCESS:
      return { ...state, loading: false, email: '', password: '', error: null };

    case AuthActionTypes.SIGN_UP_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
