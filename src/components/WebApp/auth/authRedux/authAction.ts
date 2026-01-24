export enum AuthActionTypes {
  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD',
  SET_CODE = 'SET_CODE',
  VALIDATE_CREDENTIALS = 'VALIDATE_CREDENTIALS',

  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',

  CONFIRM_SIGN_UP_REQUEST = 'CONFIRM_SIGN_UP_REQUEST',
  CONFIRM_SIGN_UP_SUCCESS = 'CONFIRM_SIGN_UP_SUCCESS',
  CONFIRM_SIGN_UP_FAILURE = 'CONFIRM_SIGN_UP_FAILURE',

  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',

  CONFIRM_PASSWORD_REQUEST = 'CONFIRM_PASSWORD_REQUEST',
  CONFIRM_PASSWORD_SUCCESS = 'CONFIRM_PASSWORD_SUCCESS',
  CONFIRM_PASSWORD_FAILURE = 'CONFIRM_PASSWORD_FAILURE',

  RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE',

  SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE',

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

export interface SignUpRequestAction {
  type: AuthActionTypes.SIGN_UP_REQUEST;
  payload: { email: string; password: string };
}
export interface SignUpSuccessAction {
  type: AuthActionTypes.SIGN_UP_SUCCESS;
  result;
}
export interface SignUpFailureAction {
  type: AuthActionTypes.SIGN_UP_FAILURE;
  payload: any;
}
export interface ConfirmSignUpRequestAction {
  type: AuthActionTypes.CONFIRM_SIGN_UP_REQUEST;
  payload: { email: string; code: string };
}
export interface ConfirmSignUpSuccessAction {
  type: AuthActionTypes.CONFIRM_SIGN_UP_SUCCESS;
  result;
}
export interface ConfirmSignUpFailureAction {
  type: AuthActionTypes.CONFIRM_SIGN_UP_FAILURE;
  payload: any;
}
export interface SignInRequestAction {
  type: AuthActionTypes.SIGN_IN_REQUEST;
  payload: { email: string; password: string };
}
export interface SignInSuccessAction {
  type: AuthActionTypes.SIGN_IN_SUCCESS;
  result;
}
export interface SignInFailureAction {
  type: AuthActionTypes.SIGN_IN_FAILURE;
  payload: any;
}
export interface ConfirmPasswordRequestAction {
  type: AuthActionTypes.CONFIRM_PASSWORD_REQUEST;
  payload: { email: string; code: string; password: string };
}
export interface ConfirmPasswordSuccessAction {
  type: AuthActionTypes.CONFIRM_PASSWORD_SUCCESS;
  result;
}
export interface ConfirmPasswordFailureAction {
  type: AuthActionTypes.CONFIRM_PASSWORD_FAILURE;
  payload: any;
}
export interface ResetPasswordRequestAction {
  type: AuthActionTypes.RESET_PASSWORD_REQUEST;
  payload: { email: string };
}
export interface ResetPasswordSuccessAction {
  type: AuthActionTypes.RESET_PASSWORD_SUCCESS;
  result;
}
export interface ResetPasswordFailureAction {
  type: AuthActionTypes.RESET_PASSWORD_FAILURE;
  payload: any;
}
export interface SignOutRequestAction {
  type: AuthActionTypes.SIGN_OUT_REQUEST;
}
export interface SignOutSuccessAction {
  type: AuthActionTypes.SIGN_OUT_SUCCESS;
}
export interface SignOutFailureAction {
  type: AuthActionTypes.SIGN_OUT_FAILURE;
  payload: any;
}
export interface SetEmailAction {
  type: AuthActionTypes.SET_EMAIL;
  payload: string;
}
export interface SetPasswordAction {
  type: AuthActionTypes.SET_PASSWORD;
  payload: string;
}
export interface SetConfirmPasswordAction {
  type: AuthActionTypes.SET_CONFIRM_PASSWORD;
  payload: string;
}
export interface SetCodeAction {
  type: AuthActionTypes.SET_CODE;
  payload: string;
}
export interface ValidateCredentialsAction {
  type: AuthActionTypes.VALIDATE_CREDENTIALS;
}
export interface SetActiveModalAction {
  type: AuthActionTypes.SET_ACTIVE_MODAL;
  payload: ModalType;
}
export interface SetSignupFlowAction {
  type: AuthActionTypes.SET_SIGNUP_FLOW;
  payload: boolean;
}
export interface SetRecoveryFlowAction {
  type: AuthActionTypes.SET_RECOVERY_FLOW;
  payload: boolean;
}
export interface ResetFormAction {
  type: AuthActionTypes.RESET_FORM;
}

export type AuthActions =
  | SignUpRequestAction
  | SignUpFailureAction
  | SignUpSuccessAction
  | ConfirmSignUpRequestAction
  | ConfirmSignUpSuccessAction
  | ConfirmSignUpFailureAction
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | ConfirmPasswordRequestAction
  | ConfirmPasswordSuccessAction
  | ConfirmPasswordFailureAction
  | ResetPasswordRequestAction
  | ResetPasswordSuccessAction
  | ResetPasswordFailureAction
  | SignOutRequestAction
  | SignOutSuccessAction
  | SignOutFailureAction
  | SetEmailAction
  | SetPasswordAction
  | SetConfirmPasswordAction
  | SetCodeAction
  | ValidateCredentialsAction
  | SetActiveModalAction
  | SetSignupFlowAction
  | SetRecoveryFlowAction
  | ResetFormAction;

export const signUpRequest = (email: string, password: string): SignUpRequestAction => ({
  type: AuthActionTypes.SIGN_UP_REQUEST,
  payload: { email, password },
});
export const signUpSuccess = (result: any): SignUpSuccessAction => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
  result,
});
export const signUpFailure = (error: any): SignUpFailureAction => ({
  type: AuthActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
export const confirmSignUpRequest = (email: string, code: string): ConfirmSignUpRequestAction => ({
  type: AuthActionTypes.CONFIRM_SIGN_UP_REQUEST,
  payload: { email, code },
});
export const confirmSignUpSuccess = (result: any): ConfirmSignUpSuccessAction => ({
  type: AuthActionTypes.CONFIRM_SIGN_UP_SUCCESS,
  result,
});
export const confirmSignUpFailure = (error: any): ConfirmSignUpFailureAction => ({
  type: AuthActionTypes.CONFIRM_SIGN_UP_FAILURE,
  payload: error,
});
export const signInRequest = (email: string, password: string): SignInRequestAction => ({
  type: AuthActionTypes.SIGN_IN_REQUEST,
  payload: { email, password },
});
export const signInSuccess = (result: any): SignInSuccessAction => ({
  type: AuthActionTypes.SIGN_IN_SUCCESS,
  result,
});
export const signInFailure = (error: any): SignInFailureAction => ({
  type: AuthActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
export const confirmPasswordRequest = (
  email: string,
  code: string,
  password: string,
): ConfirmPasswordRequestAction => ({
  type: AuthActionTypes.CONFIRM_PASSWORD_REQUEST,
  payload: { email, code, password },
});
export const confirmPasswordSuccess = (result: any): ConfirmPasswordSuccessAction => ({
  type: AuthActionTypes.CONFIRM_PASSWORD_SUCCESS,
  result,
});
export const confirmPasswordFailure = (error: any): ConfirmPasswordFailureAction => ({
  type: AuthActionTypes.CONFIRM_PASSWORD_FAILURE,
  payload: error,
});
export const resetPasswordRequest = (email: string): ResetPasswordRequestAction => ({
  type: AuthActionTypes.RESET_PASSWORD_REQUEST,
  payload: { email },
});
export const resetPasswordSuccess = (result): ResetPasswordSuccessAction => ({
  type: AuthActionTypes.RESET_PASSWORD_SUCCESS,
  result,
});
export const resetPasswordFailure = (error: any): ResetPasswordFailureAction => ({
  type: AuthActionTypes.RESET_PASSWORD_FAILURE,
  payload: error,
});
export const signOutRequest = (): SignOutRequestAction => ({
  type: AuthActionTypes.SIGN_OUT_REQUEST,
});
export const signOutSuccess = (): SignOutSuccessAction => ({
  type: AuthActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error: any): SignOutFailureAction => ({
  type: AuthActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
export const setEmail = (email: string): SetEmailAction => ({
  type: AuthActionTypes.SET_EMAIL,
  payload: email,
});
export const setPassword = (password: string): SetPasswordAction => ({
  type: AuthActionTypes.SET_PASSWORD,
  payload: password,
});
export const setConfirmPassword = (confirmPassword: string): SetConfirmPasswordAction => ({
  type: AuthActionTypes.SET_CONFIRM_PASSWORD,
  payload: confirmPassword,
});
export const setCode = (code: string): SetCodeAction => ({
  type: AuthActionTypes.SET_CODE,
  payload: code,
});
export const validateCredentials = (): ValidateCredentialsAction => ({
  type: AuthActionTypes.VALIDATE_CREDENTIALS,
});
export const setActiveModal = (modal: ModalType): SetActiveModalAction => ({
  type: AuthActionTypes.SET_ACTIVE_MODAL,
  payload: modal,
});
export const setSignupFlow = (isSignup: boolean): SetSignupFlowAction => ({
  type: AuthActionTypes.SET_SIGNUP_FLOW,
  payload: isSignup,
});
export const setRecoveryFlow = (isRecovery: boolean): SetRecoveryFlowAction => ({
  type: AuthActionTypes.SET_RECOVERY_FLOW,
  payload: isRecovery,
});
export const resetForm = (): ResetFormAction => ({
  type: AuthActionTypes.RESET_FORM,
});
