export enum AuthActionTypes {
  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  CONFIRM_SIGN_UP_REQUEST = 'CONFIRM_SIGN_UP_REQUEST',
  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
  CONFIRM_FORGOT_CODE_REQUEST = 'CONFIRM_FORGOT_CODE_REQUEST',
  RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST',
  SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST',
  SET_USER = 'SET_USER',
  SET_AUTH_STATUS = 'SET_AUTH_STATUS',
}

export interface SignUpRequestAction {
  type: AuthActionTypes.SIGN_UP_REQUEST;
  payload: { email: string; password: string };
}

export interface ConfirmSignUpRequestAction {
  type: AuthActionTypes.CONFIRM_SIGN_UP_REQUEST;
  payload: { email: string; code: string };
}

export interface SignInRequestAction {
  type: AuthActionTypes.SIGN_IN_REQUEST;
  payload: { email: string; password: string };
}

export interface ForgotPasswordRequestAction {
  type: AuthActionTypes.FORGOT_PASSWORD_REQUEST;
  payload: string;
}

export interface ConfirmForgotCodeRequestAction {
  type: AuthActionTypes.CONFIRM_FORGOT_CODE_REQUEST;
  payload: { email: string; code: string };
}

export interface ResetPasswordRequestAction {
  type: AuthActionTypes.RESET_PASSWORD_REQUEST;
  payload: { email: string; code: string; newPassword: string };
}

export interface SignOutRequestAction {
  type: AuthActionTypes.SIGN_OUT_REQUEST;
}

export interface SetUserAction {
  type: AuthActionTypes.SET_USER;
  payload: any | null;
}

export interface SetAuthStatusAction {
  type: AuthActionTypes.SET_AUTH_STATUS;
  payload: 'idle' | 'loading' | 'authenticated' | 'unauthenticated';
}

export type AuthActions =
  | SignUpRequestAction
  | ConfirmSignUpRequestAction
  | SignInRequestAction
  | ForgotPasswordRequestAction
  | ConfirmForgotCodeRequestAction
  | ResetPasswordRequestAction
  | SignOutRequestAction
  | SetUserAction
  | SetAuthStatusAction;

export const signUpRequest = (email: string, password: string): SignUpRequestAction => ({
  type: AuthActionTypes.SIGN_UP_REQUEST,
  payload: { email, password },
});

export const confirmSignUpRequest = (email: string, code: string): ConfirmSignUpRequestAction => ({
  type: AuthActionTypes.CONFIRM_SIGN_UP_REQUEST,
  payload: { email, code },
});

export const signInRequest = (email: string, password: string): SignInRequestAction => ({
  type: AuthActionTypes.SIGN_IN_REQUEST,
  payload: { email, password },
});

export const forgotPasswordRequest = (email: string): ForgotPasswordRequestAction => ({
  type: AuthActionTypes.FORGOT_PASSWORD_REQUEST,
  payload: email,
});

export const confirmForgotCodeRequest = (email: string, code: string): ConfirmForgotCodeRequestAction => ({
  type: AuthActionTypes.CONFIRM_FORGOT_CODE_REQUEST,
  payload: { email, code },
});

export const resetPasswordRequest = (email: string, code: string, newPassword: string): ResetPasswordRequestAction => ({
  type: AuthActionTypes.RESET_PASSWORD_REQUEST,
  payload: { email, code, newPassword },
});

export const signOutRequest = (): SignOutRequestAction => ({
  type: AuthActionTypes.SIGN_OUT_REQUEST,
});

export const setUser = (user: any | null): SetUserAction => ({
  type: AuthActionTypes.SET_USER,
  payload: user,
});

export const setAuthStatus = (
  status: 'idle' | 'loading' | 'authenticated' | 'unauthenticated',
): SetAuthStatusAction => ({
  type: AuthActionTypes.SET_AUTH_STATUS,
  payload: status,
});
