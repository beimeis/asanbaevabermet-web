export enum AuthActionTypes {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  SET_MODAL_VIEW = 'SET_MODAL_VIEW',
  GO_BACK = 'GO_BACK',

  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',

  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = 'SIGN_UP_FAIL',
}

export interface OpenModalActionType {
  type: AuthActionTypes.OPEN_MODAL;
  payload: { view?: 'intro' | 'login' | 'register' };
}

export interface CloseModalActionType {
  type: AuthActionTypes.CLOSE_MODAL;
}

export interface SetModalViewActionType {
  type: AuthActionTypes.SET_MODAL_VIEW;
  payload: 'intro' | 'login' | 'register';
}
export interface SetEmailActionType {
  type: AuthActionTypes.SET_EMAIL;
  email: string;
}

export interface SetPasswordActionType {
  type: AuthActionTypes.SET_PASSWORD;
  password: string;
}

export interface SignUpRequestActionType {
  type: AuthActionTypes.SIGN_UP_REQUEST;
  email: string;
  password: string;
}

export interface SingUpSuccessActionType {
  type: AuthActionTypes.SIGN_UP_SUCCESS;
}

export interface SingUpFailActionType {
  type: AuthActionTypes.SIGN_UP_FAIL;
  error: string;
}

export type AuthActions =
  | OpenModalActionType
  | CloseModalActionType
  | SetModalViewActionType
  | SetEmailActionType
  | SetPasswordActionType
  | SignUpRequestActionType
  | SingUpSuccessActionType
  | SingUpFailActionType;

export const openModal = (view: 'intro' | 'login' | 'register' = 'intro'): OpenModalActionType => ({
  type: AuthActionTypes.OPEN_MODAL,
  payload: { view },
});

export const closeModal = (): CloseModalActionType => ({
  type: AuthActionTypes.CLOSE_MODAL,
});

export const setModalView = (view: 'intro' | 'login' | 'register'): SetModalViewActionType => ({
  type: AuthActionTypes.SET_MODAL_VIEW,
  payload: view,
});

export const signUpRequest = (email, password): SignUpRequestActionType => ({
  type: AuthActionTypes.SIGN_UP_REQUEST,
  email,
  password,
});

export const singUpSuccess = (): SingUpSuccessActionType => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
});

export const singUpFail = (error): SingUpFailActionType => ({
  type: AuthActionTypes.SIGN_UP_FAIL,
  error,
});

export const setEmail = (email): SetEmailActionType => ({
  type: AuthActionTypes.SET_EMAIL,
  email,
});

export const setPassword = (password): SetPasswordActionType => ({
  type: AuthActionTypes.SET_PASSWORD,
  password,
});
