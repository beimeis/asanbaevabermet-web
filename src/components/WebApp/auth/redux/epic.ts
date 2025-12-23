/* External dependencies */
import CognitoClient from '@mancho.devs/cognito';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

/* Local dependencies */
import { AuthActionTypes } from './action';

const cognitoClient = new CognitoClient({
  UserPoolId: process.env.GATSBY_COGNITO_USER_POOL_ID,
  ClientId: process.env.GATSBY_COGNITO_CLIENT_ID,
});
// export function signUpEpic(action$) Observable<>{};
