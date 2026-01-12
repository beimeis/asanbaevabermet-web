import { from, of } from 'rxjs';
import { filter, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { AuthActionTypes, AuthActions } from './authAction';
import CognitoClient from '@mancho.devs/cognito';

import {
  signUpRequest,
  confirmSignUpRequest,
  signInRequest,
  forgotPasswordRequest,
  confirmForgotCodeRequest,
  resetPasswordRequest,
  signOutRequest,
} from './authAction';

import { setActiveModal } from '../Modal/uiRedux/uiAction';

import { setUser, setAuthStatus } from './authAction';

const cognito = new CognitoClient({
  UserPoolId: process.env.GATSBY_COGNITO_USER_POOL_ID!,
  ClientId: process.env.GATSBY_COGNITO_CLIENT_ID!,
});
