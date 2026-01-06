/* External dependencies */
import CognitoClient from '@mancho.devs/cognito';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

/* Local dependencies */
import {
  AuthActionTypes,
  signupSuccess,
  signupFailed,
  confirmSignupSuccess,
  confirmSignupFailed,
  // Для resend можно не диспатчить отдельные success/failed, так как у тебя нет таких actions
} from './action';

// Создаём единственный экземпляр клиента Cognito
const cognitoClient = new CognitoClient({
  UserPoolId: process.env.GATSBY_COGNITO_USER_POOL_ID!,
  ClientId: process.env.GATSBY_COGNITO_CLIENT_ID!,
});
