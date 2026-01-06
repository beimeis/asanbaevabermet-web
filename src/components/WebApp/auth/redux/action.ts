export enum AuthActionTypes {
  OPEN_INTRO_MODAL = 'OPEN_INTRO_MODAL',
  CLOSE_INTRO_MODAL = 'CLOSE_INTRO_MODAL',
  OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL',
  CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL',
  OPEN_SIGNUP_MODAL = 'OPEN_SIGNUP_MODAL',
  CLOSE_SIGNUP_MODAL = 'CLOSE_SIGNUP_MODAL',

  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD',
  VALIDATE_CREDENTIALS = 'VALIDATE_CREDENTIALS',
  SET_SIGNUP_STEP = 'SET_SIGNUP_STEP',

  OPEN_INTRO_FROM_LOGIN = 'OPEN_INTRO_FROM_LOGIN',
  OPEN_INTRO_FROM_SIGNUP = 'OPEN_INTRO_FROM_SIGNUP',

  SIGNUP_REQUEST = 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAILED = 'SIGNUP_FAILED',

  CONFIRM_SIGNUP_REQUEST = 'CONFIRM_SIGNUP_REQUEST',
  CONFIRM_SIGNUP_SUCCESS = 'CONFIRM_SIGNUP_SUCCESS',
  CONFIRM_SIGNUP_FAILED = 'CONFIRM_SIGNUP_FAILED',
  RESEND_SIGNUP_CODE = 'RESEND_SIGNUP_CODE',
}

export interface OpenIntroModalAction {
  type: AuthActionTypes.OPEN_INTRO_MODAL;
}
export interface CloseIntroModalAction {
  type: AuthActionTypes.CLOSE_INTRO_MODAL;
}
export interface OpenLoginModalAction {
  type: AuthActionTypes.OPEN_LOGIN_MODAL;
}
export interface CloseLoginModalAction {
  type: AuthActionTypes.CLOSE_LOGIN_MODAL;
}
export interface OpenSignupModalAction {
  type: AuthActionTypes.OPEN_SIGNUP_MODAL;
}
export interface CloseSignupModalAction {
  type: AuthActionTypes.CLOSE_SIGNUP_MODAL;
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
export interface SetSignupStepAction {
  type: AuthActionTypes.SET_SIGNUP_STEP;
  payload: 'register' | 'confirm';
}

export interface OpenIntroFromLoginAction {
  type: AuthActionTypes.OPEN_INTRO_FROM_LOGIN;
}

export interface OpenIntroFromSignupAction {
  type: AuthActionTypes.OPEN_INTRO_FROM_SIGNUP;
}

// === Новые интерфейсы (только для OTP-регистрации) ===
export interface SignupRequestAction {
  type: AuthActionTypes.SIGNUP_REQUEST;
  payload: { email: string; password: string };
}

export interface SignupSuccessAction {
  type: AuthActionTypes.SIGNUP_SUCCESS;
}

export interface SignupFailedAction {
  type: AuthActionTypes.SIGNUP_FAILED;
  payload: string;
}

export interface ConfirmSignupRequestAction {
  type: AuthActionTypes.CONFIRM_SIGNUP_REQUEST;
  payload: { email: string; code: string };
}

export interface ConfirmSignupSuccessAction {
  type: AuthActionTypes.CONFIRM_SIGNUP_SUCCESS;
}

export interface ConfirmSignupFailedAction {
  type: AuthActionTypes.CONFIRM_SIGNUP_FAILED;
  payload: string;
}

export interface ResendSignupCodeAction {
  type: AuthActionTypes.RESEND_SIGNUP_CODE;
  payload: string; // email
}

export type AuthActions =
  | OpenIntroModalAction
  | CloseIntroModalAction
  | OpenLoginModalAction
  | CloseLoginModalAction
  | OpenSignupModalAction
  | CloseSignupModalAction
  | SetEmailAction
  | SetPasswordAction
  | SetConfirmPasswordAction
  | ValidateCredentialsAction
  | SetSignupStepAction
  | OpenIntroFromLoginAction
  | OpenIntroFromSignupAction
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailedAction
  | ConfirmSignupRequestAction
  | ConfirmSignupSuccessAction
  | ConfirmSignupFailedAction
  | ResendSignupCodeAction;

export const openIntroModal = (): OpenIntroModalAction => ({ type: AuthActionTypes.OPEN_INTRO_MODAL });
export const closeIntroModal = (): CloseIntroModalAction => ({ type: AuthActionTypes.CLOSE_INTRO_MODAL });
export const openLoginModal = (): OpenLoginModalAction => ({ type: AuthActionTypes.OPEN_LOGIN_MODAL });
export const closeLoginModal = (): CloseLoginModalAction => ({ type: AuthActionTypes.CLOSE_LOGIN_MODAL });
export const openSignupModal = (): OpenSignupModalAction => ({ type: AuthActionTypes.OPEN_SIGNUP_MODAL });
export const closeSignupModal = (): CloseSignupModalAction => ({ type: AuthActionTypes.CLOSE_SIGNUP_MODAL });

export const setEmail = (email: string): SetEmailAction => ({ type: AuthActionTypes.SET_EMAIL, payload: email });
export const setPassword = (password: string): SetPasswordAction => ({
  type: AuthActionTypes.SET_PASSWORD,
  payload: password,
});
export const setConfirmPassword = (confirmPassword: string): SetConfirmPasswordAction => ({
  type: AuthActionTypes.SET_CONFIRM_PASSWORD,
  payload: confirmPassword,
});
export const validateCredentials = (): ValidateCredentialsAction => ({ type: AuthActionTypes.VALIDATE_CREDENTIALS });
export const setSignupStep = (step: 'register' | 'confirm'): SetSignupStepAction => ({
  type: AuthActionTypes.SET_SIGNUP_STEP,
  payload: step,
});
export const openIntroFromLogin = (): OpenIntroFromLoginAction => ({ type: AuthActionTypes.OPEN_INTRO_FROM_LOGIN });
export const openIntroFromSignup = (): OpenIntroFromSignupAction => ({ type: AuthActionTypes.OPEN_INTRO_FROM_SIGNUP });
export const signupRequest = (email: string, password: string): SignupRequestAction => ({
  type: AuthActionTypes.SIGNUP_REQUEST,
  payload: { email, password },
});

export const signupSuccess = (): SignupSuccessAction => ({
  type: AuthActionTypes.SIGNUP_SUCCESS,
});

export const signupFailed = (error: string): SignupFailedAction => ({
  type: AuthActionTypes.SIGNUP_FAILED,
  payload: error,
});

export const confirmSignupRequest = (email: string, code: string): ConfirmSignupRequestAction => ({
  type: AuthActionTypes.CONFIRM_SIGNUP_REQUEST,
  payload: { email, code },
});

export const confirmSignupSuccess = (): ConfirmSignupSuccessAction => ({
  type: AuthActionTypes.CONFIRM_SIGNUP_SUCCESS,
});

export const confirmSignupFailed = (error: string): ConfirmSignupFailedAction => ({
  type: AuthActionTypes.CONFIRM_SIGNUP_FAILED,
  payload: error,
});

export const resendSignupCode = (email: string): ResendSignupCodeAction => ({
  type: AuthActionTypes.RESEND_SIGNUP_CODE,
  payload: email,
});
