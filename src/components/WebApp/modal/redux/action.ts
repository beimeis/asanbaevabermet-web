export enum AuthActionTypes {
  LoginStart = 'auth/LOGIN_START',
  LoginSuccess = 'auth/LOGIN_SUCCESS',
  LoginFailure = 'auth/LOGIN_FAILURE',
  Logout = 'auth/LOGOUT',
}

export const loginStart = () => ({
  type: AuthActionTypes.LoginStart,
});
export const loginSuccess = () => ({
  type: AuthActionTypes.LoginSuccess,
});
export const LoginFailure = () => ({
  type: AuthActionTypes.LoginFailure,
});
export const Logout = () => ({
  type: AuthActionTypes.Logout,
});
