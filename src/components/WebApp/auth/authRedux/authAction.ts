export enum AuthActionTypes {
  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD',
  VALIDATE_CREDENTIALS = 'VALIDATE_CREDENTIALS',

  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',

  SIGN_UP_CODE_REQUEST = 'SIGN_UP_CODE_REQUEST',
  SIGN_UP_CODE_SUCCESS = 'SIGN_UP_CODE_SUCCESS',
  SIGN_UP_CODE_FAILURE = 'SIGN_UP_CODE_FAILURE',

  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',

  FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE',

  CONFIRM_FORGOT_CODE_REQUEST = 'CONFIRM_FORGOT_CODE_REQUEST',
  CONFIRM_FORGOT_CODE_SUCCESS = 'CONFIRM_FORGOT_CODE_SUCCESS',
  CONFIRM_FORGOT_CODE_FAILURE = 'CONFIRM_FORGOT_CODE_FAILURE',

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
}
export interface SignUpFailureAction {
  type: AuthActionTypes.SIGN_UP_FAILURE;
  payload: string;
}
export interface SignUpCodeRequestAction {
  type: AuthActionTypes.SIGN_UP_CODE_REQUEST;
  payload: { email: string; code: string };
}
export interface SignUpCodeSuccessAction {
  type: AuthActionTypes.SIGN_UP_CODE_SUCCESS;
}
export interface SignUpCodeFailureAction {
  type: AuthActionTypes.SIGN_UP_CODE_FAILURE;
  payload: string;
}
export interface SignInRequestAction {
  type: AuthActionTypes.SIGN_IN_REQUEST;
  payload: { email: string; password: string };
}
export interface SignInSuccessAction {
  type: AuthActionTypes.SIGN_IN_SUCCESS;
}
export interface SignInFailureAction {
  type: AuthActionTypes.SIGN_IN_FAILURE;
  payload: string;
}
export interface ForgotPasswordRequestAction {
  type: AuthActionTypes.FORGOT_PASSWORD_REQUEST;
  payload: { email: string };
}
export interface ForgotPasswordSuccessAction {
  type: AuthActionTypes.FORGOT_PASSWORD_SUCCESS;
}
export interface ForgotPasswordFailureAction {
  type: AuthActionTypes.FORGOT_PASSWORD_FAILURE;
  payload: string;
}
export interface ConfirmForgotCodeRequestAction {
  type: AuthActionTypes.CONFIRM_FORGOT_CODE_REQUEST;
  payload: { email: string; code: string };
}
export interface ConfirmForgotCodeSuccessAction {
  type: AuthActionTypes.CONFIRM_FORGOT_CODE_SUCCESS;
}
export interface ConfirmForgotCodeFailureAction {
  type: AuthActionTypes.CONFIRM_FORGOT_CODE_FAILURE;
  payload: string;
}
export interface ResetPasswordRequestAction {
  type: AuthActionTypes.RESET_PASSWORD_REQUEST;
  payload: { email: string; password: string };
}
export interface ResetPasswordSuccessAction {
  type: AuthActionTypes.RESET_PASSWORD_SUCCESS;
}
export interface ResetPasswordFailureAction {
  type: AuthActionTypes.RESET_PASSWORD_FAILURE;
  payload: string;
}
export interface SignOutRequestAction {
  type: AuthActionTypes.SIGN_OUT_REQUEST;
}
export interface SignOutSuccessAction {
  type: AuthActionTypes.SIGN_OUT_SUCCESS;
}
export interface SignOutFailureAction {
  type: AuthActionTypes.SIGN_OUT_FAILURE;
  payload: string;
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
  | SignUpCodeRequestAction
  | SignUpCodeSuccessAction
  | SignUpCodeFailureAction
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | ForgotPasswordRequestAction
  | ForgotPasswordSuccessAction
  | ForgotPasswordFailureAction
  | ConfirmForgotCodeRequestAction
  | ConfirmForgotCodeSuccessAction
  | ConfirmForgotCodeFailureAction
  | ResetPasswordRequestAction
  | ResetPasswordSuccessAction
  | ResetPasswordFailureAction
  | SignOutRequestAction
  | SignOutSuccessAction
  | SignOutFailureAction
  | SetEmailAction
  | SetPasswordAction
  | SetConfirmPasswordAction
  | ValidateCredentialsAction
  | SetActiveModalAction
  | SetSignupFlowAction
  | SetRecoveryFlowAction
  | ResetFormAction;

export const signUpRequest = (email: string, password: string): SignUpRequestAction => ({
  type: AuthActionTypes.SIGN_UP_REQUEST,
  payload: { email, password },
});
export const signUpSuccess = (): SignUpSuccessAction => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
});
export const signUpFailure = (error: string): SignUpFailureAction => ({
  type: AuthActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
export const signUpCodeRequest = (email: string, code: string): SignUpCodeRequestAction => ({
  type: AuthActionTypes.SIGN_UP_CODE_REQUEST,
  payload: { email, code },
});
export const signUpCodeSuccess = (): SignUpCodeSuccessAction => ({
  type: AuthActionTypes.SIGN_UP_CODE_SUCCESS,
});
export const singUpCodeFailure = (error: string): SignUpCodeFailureAction => ({
  type: AuthActionTypes.SIGN_UP_CODE_FAILURE,
  payload: error,
});
export const signInRequest = (email: string, password: string): SignInRequestAction => ({
  type: AuthActionTypes.SIGN_IN_REQUEST,
  payload: { email, password },
});
export const signInSuccess = (): SignInSuccessAction => ({
  type: AuthActionTypes.SIGN_IN_SUCCESS,
});
export const signInFailure = (error: string): SignInFailureAction => ({
  type: AuthActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
export const forgotPasswordRequest = (email: string): ForgotPasswordRequestAction => ({
  type: AuthActionTypes.FORGOT_PASSWORD_REQUEST,
  payload: { email },
});
export const forgotPasswordSuccess = (): ForgotPasswordSuccessAction => ({
  type: AuthActionTypes.FORGOT_PASSWORD_SUCCESS,
});
export const forgotPasswordFailure = (error: string): ForgotPasswordFailureAction => ({
  type: AuthActionTypes.FORGOT_PASSWORD_FAILURE,
  payload: error,
});
export const confirmForgoteCodeRequest = (email: string, code: string): ConfirmForgotCodeRequestAction => ({
  type: AuthActionTypes.CONFIRM_FORGOT_CODE_REQUEST,
  payload: { email, code },
});
export const confirmForgotCodeSuccess = (): ConfirmForgotCodeSuccessAction => ({
  type: AuthActionTypes.CONFIRM_FORGOT_CODE_SUCCESS,
});
export const confirmForgotCodeFailure = (error: string): ConfirmForgotCodeFailureAction => ({
  type: AuthActionTypes.CONFIRM_FORGOT_CODE_FAILURE,
  payload: error,
});
export const resetPasswordRequest = (email: string, password: string): ResetPasswordRequestAction => ({
  type: AuthActionTypes.RESET_PASSWORD_REQUEST,
  payload: { email, password },
});
export const resetPasswordSuccess = (): ResetPasswordSuccessAction => ({
  type: AuthActionTypes.RESET_PASSWORD_SUCCESS,
});
export const resetPasswordFailure = (error: string): ResetPasswordFailureAction => ({
  type: AuthActionTypes.RESET_PASSWORD_FAILURE,
  payload: error,
});
export const signOutRequest = (): SignOutRequestAction => ({
  type: AuthActionTypes.SIGN_OUT_REQUEST,
});
export const signOutSuccess = (): SignOutSuccessAction => ({
  type: AuthActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error: string): SignOutFailureAction => ({
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
