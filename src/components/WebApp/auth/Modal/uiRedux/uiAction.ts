export enum UiActionTypes {
  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD',
  VALIDATE_CREDENTIALS = 'VALIDATE_CREDENTIALS',

  SET_ACTIVE_MODAL = 'SET_ACTIVE_MODAL',
  SET_SIGNUP_FLOW = 'SET_SIGNUP_FLOW',
  SET_RECOVERY_FLOW = 'SET_RECOVERY_FLOW',

  RESET_FORM = 'RESET_FORM',
}

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

export interface SetEmailAction {
  type: UiActionTypes.SET_EMAIL;
  payload: string;
}
export interface SetPasswordAction {
  type: UiActionTypes.SET_PASSWORD;
  payload: string;
}
export interface SetConfirmPasswordAction {
  type: UiActionTypes.SET_CONFIRM_PASSWORD;
  payload: string;
}
export interface ValidateCredentialsAction {
  type: UiActionTypes.VALIDATE_CREDENTIALS;
}

export interface SetActiveModalAction {
  type: UiActionTypes.SET_ACTIVE_MODAL;
  payload: ModalType;
}

export interface SetSignupFlowAction {
  type: UiActionTypes.SET_SIGNUP_FLOW;
  payload: boolean;
}

export interface SetRecoveryFlowAction {
  type: UiActionTypes.SET_RECOVERY_FLOW;
  payload: boolean;
}

export interface ResetFormAction {
  type: UiActionTypes.RESET_FORM;
}
export type UiActions =
  | SetActiveModalAction
  | SetSignupFlowAction
  | SetRecoveryFlowAction
  | SetEmailAction
  | SetPasswordAction
  | SetConfirmPasswordAction
  | ValidateCredentialsAction
  | ResetFormAction;

export const setEmail = (email: string): SetEmailAction => ({
  type: UiActionTypes.SET_EMAIL,
  payload: email,
});
export const setPassword = (password: string): SetPasswordAction => ({
  type: UiActionTypes.SET_PASSWORD,
  payload: password,
});
export const setConfirmPassword = (confirmPassword: string): SetConfirmPasswordAction => ({
  type: UiActionTypes.SET_CONFIRM_PASSWORD,
  payload: confirmPassword,
});
export const validateCredentials = (): ValidateCredentialsAction => ({
  type: UiActionTypes.VALIDATE_CREDENTIALS,
});
export const setActiveModal = (modal: ModalType): SetActiveModalAction => ({
  type: UiActionTypes.SET_ACTIVE_MODAL,
  payload: modal,
});
export const setSignupFlow = (isSignup: boolean): SetSignupFlowAction => ({
  type: UiActionTypes.SET_SIGNUP_FLOW,
  payload: isSignup,
});
export const setRecoveryFlow = (isRecovery: boolean): SetRecoveryFlowAction => ({
  type: UiActionTypes.SET_RECOVERY_FLOW,
  payload: isRecovery,
});
export const resetForm = (): ResetFormAction => ({
  type: UiActionTypes.RESET_FORM,
});
