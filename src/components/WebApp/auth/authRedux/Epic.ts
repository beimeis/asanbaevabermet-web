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
  singUpCodeFailure,
  signInSuccess,
  signInFailure,
  SignInRequestAction,
} from './authAction';

const cognitoClient = new CognitoClient({
  UserPoolId: process.env.GATSBY_COGNITO_USER_POOL_ID,
  ClientId: process.env.GATSBY_COGNITO_CLIENT_ID,
});

export function signUpEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_UP_REQUEST),
    switchMap(({ payload: { email, password } }: SignUpRequestAction) =>
      cognitoClient.signUp(email, password).then(signUpSuccess).catch(signUpFailure),
    ),
  );
}
export function signUpConfirmCodeEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_UP_CODE_REQUEST),
    switchMap(({ payload: { email, code } }: SignUpCodeRequestAction) =>
      cognitoClient.signUpConfirmCode(email, code).then(signUpCodeSuccess).catch(singUpCodeFailure),
    ),
  );
}
export function signInEpic(action$): Observable<AuthActions> {
  return action$.pipe(
    filter((action: AuthActions) => action.type === AuthActionTypes.SIGN_IN_REQUEST),
    switchMap(({ payload: { email, password } }: SignInRequestAction) =>
      cognitoClient.signIn(email, password).then(signInSuccess).catch(signInFailure),
    ),
  );
}
