/* External dependencies */
import CognitoClient from '@mancho.devs/cognito';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

/* Local dependencies */
import {
  AuthActionTypes,
  AuthActions,
  signUpSuccess,
  signUpFailure,
  SignUpRequestAction,
  signInSuccess,
  signInFailure,
  SignInRequestAction,
  confirmPasswordSuccess,
  confirmPasswordFailure,
  ConfirmPasswordRequestAction,
  ResetPasswordRequestAction,
  resetPasswordSuccess,
  resetPasswordFailure,
  signOutSuccess,
  SignOutRequestAction,
  ConfirmSignUpRequestAction,
  confirmSignUpSuccess,
  confirmSignUpFailure,
} from './authAction';

const cognitoClient = new CognitoClient({
  UserPoolId: process.env.GATSBY_COGNITO_USER_POOL_ID,
  ClientId: process.env.GATSBY_COGNITO_CLIENT_ID,
});

export function signUpEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_UP_REQUEST),
    switchMap(({ payload: { email, password } }: SignUpRequestAction) =>
      cognitoClient
        .signUp(email, password)
        .then(signUpSuccess)
        .catch((err) => signUpFailure(err)),
    ),
  );
}
export function confirmSignUpEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.CONFIRM_SIGN_UP_REQUEST),
    switchMap(({ payload: { email, code } }: ConfirmSignUpRequestAction) =>
      cognitoClient
        .signUpConfirmCode(email, code)
        .then(confirmSignUpSuccess)
        .catch((err) => confirmSignUpFailure(err)),
    ),
  );
}
export function signInEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_IN_REQUEST),
    switchMap(({ payload: { email, password } }: SignInRequestAction) =>
      cognitoClient
        .signIn(email, password)
        .then((result) => {
          if (typeof window !== 'undefined') {
            localStorage.setItem('email', email);
            localStorage.setItem('isAuthenticated', 'true');
          }
          return signInSuccess(result);
        })
        .catch((err) => signInFailure(err)),
    ),
  );
}
export function forgotPasswordEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.RESET_PASSWORD_REQUEST),
    switchMap(({ payload: { email } }: ResetPasswordRequestAction) =>
      cognitoClient
        .forgotPassword(email)
        .then(resetPasswordSuccess)
        .catch((err) => resetPasswordFailure(err)),
    ),
  );
}
export function confirmPasswordEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.CONFIRM_PASSWORD_REQUEST),
    switchMap(({ payload: { email, code, password } }: ConfirmPasswordRequestAction) =>
      cognitoClient
        .confirmPassword(email, code, password)
        .then(confirmPasswordSuccess)
        .catch((err) => confirmPasswordFailure(err)),
    ),
  );
}

export function signOutEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_OUT_REQUEST),
    switchMap(({}: SignOutRequestAction) =>
      cognitoClient
        .signOut()
        .then(() => {
          if (typeof window !== 'undefined') {
            localStorage.removeItem('email');
            localStorage.removeItem('isAuthenticated');
          }
          return signOutSuccess();
        })
        .catch(() => {
          if (typeof window !== 'undefined') {
            localStorage.removeItem('email');
            localStorage.removeItem('isAuthenticated');
          }
          return signOutSuccess();
        }),
    ),
  );
}
