export enum AuthActionTypes {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  SET_MODAL_VIEW = 'SET_MODAL_VIEW',
  SET_MODAL_STEP = 'SET_MODAL_STEP',
  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD',
  VALIDATE_CREDENTIALS = 'VALIDATE_CREDENTIALS',
  RESET_REGISTRATION = 'RESET_REGISTRATION',
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

export interface SetModalStepActionType {
  type: AuthActionTypes.SET_MODAL_STEP;
  payload: 'register' | 'confirm' | null;
}
export interface SetEmailActionType {
  type: AuthActionTypes.SET_EMAIL;
  payload: string;
}

export interface SetPasswordActionType {
  type: AuthActionTypes.SET_PASSWORD;
  payload: string;
}

export interface SetConfirmPasswordActionType {
  type: AuthActionTypes.SET_CONFIRM_PASSWORD;
  payload: string;
}

export interface ValidateCredentialsActionType {
  type: AuthActionTypes.VALIDATE_CREDENTIALS;
}

export interface ResetRegistrationActionType {
  type: AuthActionTypes.RESET_REGISTRATION;
}

export type AuthActions =
  | OpenModalActionType
  | CloseModalActionType
  | SetModalViewActionType
  | SetModalStepActionType
  | SetEmailActionType
  | SetPasswordActionType
  | SetConfirmPasswordActionType
  | ValidateCredentialsActionType
  | ResetRegistrationActionType;

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

export const setModalStep = (step: 'register' | 'confirm' | null): SetModalStepActionType => ({
  type: AuthActionTypes.SET_MODAL_STEP,
  payload: step,
});

export const setEmail = (email: string): SetEmailActionType => ({
  type: AuthActionTypes.SET_EMAIL,
  payload: email,
});

export const setPassword = (password: string): SetPasswordActionType => ({
  type: AuthActionTypes.SET_PASSWORD,
  payload: password,
});

export const setConfirmPassword = (confirmPassword: string): SetConfirmPasswordActionType => ({
  type: AuthActionTypes.SET_CONFIRM_PASSWORD,
  payload: confirmPassword,
});

export const validateCredentials = (): ValidateCredentialsActionType => ({
  type: AuthActionTypes.VALIDATE_CREDENTIALS,
});

export const resetRegistration = (): ResetRegistrationActionType => ({
  type: AuthActionTypes.RESET_REGISTRATION,
});
