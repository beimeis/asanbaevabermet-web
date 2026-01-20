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
  SignUpCodeRequestAction,
  signUpCodeSuccess,
  signUpCodeFailure,
  signInSuccess,
  signInFailure,
  SignInRequestAction,
  setActiveModal,
  confirmPasswordSuccess,
  confirmPasswordFailure,
  ConfirmPasswordRequestAction,
  ResetPasswordRequestAction,
  resetPasswordSuccess,
  resetPasswordFailure,
  signOutSuccess,
  signOutFailure,
  SignOutRequestAction,
} from './authAction';

const cognitoClient = new CognitoClient({
  UserPoolId: process.env.GATSBY_COGNITO_USER_POOL_ID,
  ClientId: process.env.GATSBY_COGNITO_CLIENT_ID,
});

const getLocalizedError = (error: any): string => {
  const message = error?.message || error?.toString() || '';

  if (message.includes('Cannot reset password for the user'))
    return 'Невозможно сбросить пароль: не подтвержден Email.';
  if (message.includes('User does not exist')) return 'Пользователь не найден.';
  if (message.includes('Incorrect username or password')) return 'Неверный логин или пароль.';
  if (message.includes('Password did not conform')) return 'Пароль не должен содержать пробелы.';
  if (message.includes('User is not confirmed')) return 'Пользователь не подтвержден.';
  if (message.includes('Invalid code') || message.includes('Code mismatch')) return 'Неверный код.';
  if (message.includes('LimitExceededException') || message.includes('TooManyRequestsException'))
    return 'Превышен лимит попыток. Пожалуйста, попробуйте позже.';
  if (
    message.includes('ExpiredCodeException') ||
    message.includes('Invalid code provided, please request a code again')
  )
    return 'Срок действия кода истек. Пожалуйста, запросите новый код.';
  if (message.includes('An account with the given email already exists'))
    return 'Учетная запись с указанным адресом электронной почты уже существует.';
  if (message.includes('Invalid verification code provided, please try again.'))
    return 'Введен неверный код подтверждения, попробуйте еще раз.';
  return message || 'Произошла ошибка';
};

export function signUpEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_UP_REQUEST),
    switchMap(({ payload: { email, password } }: SignUpRequestAction) =>
      cognitoClient
        .signUp(email, password)
        .then(signUpSuccess)
        .catch((err) => Promise.resolve(signUpFailure(getLocalizedError(err)))),
    ),
  );
}

export function signUpSuccessEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_UP_SUCCESS),
    switchMap(() => Promise.resolve(setActiveModal('signup-code'))),
  );
}
export function signUpConfirmCodeEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_UP_CODE_REQUEST),
    switchMap(({ payload: { email, code } }: SignUpCodeRequestAction) =>
      cognitoClient
        .signUpConfirmCode(email, code)
        .then(signUpCodeSuccess)
        .catch((err) => Promise.resolve(signUpCodeFailure(getLocalizedError(err)))),
    ),
  );
}

export function signUpRedirectEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_UP_CODE_SUCCESS),
    switchMap(() => Promise.resolve(setActiveModal('login'))),
  );
}
export function signInEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_IN_REQUEST),
    switchMap(({ payload: { email, password } }: SignInRequestAction) =>
      cognitoClient
        .signIn(email, password)
        .then(signInSuccess)
        .catch((err) => Promise.resolve(signInFailure(getLocalizedError(err)))),
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
        .catch((err) => Promise.resolve(resetPasswordFailure(getLocalizedError(err)))),
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
        .catch((err) => Promise.resolve(confirmPasswordFailure(getLocalizedError(err)))),
    ),
  );
}
export function signOutEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_OUT_REQUEST),
    switchMap(({}: SignOutRequestAction) =>
      cognitoClient
        .signOut()
        .then(signOutSuccess)
        .catch((err) => Promise.resolve(signOutFailure(getLocalizedError(err)))),
    ),
  );
}
