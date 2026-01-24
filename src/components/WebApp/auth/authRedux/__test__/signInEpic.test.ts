import CognitoClient from '@mancho.devs/cognito';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { of } from 'rxjs/internal/observable/of';

import { AuthActionTypes, signInRequest } from '../authAction';
import { signInEpic } from '../Epic';

describe('sigInpEpic', () => {
  const email = 'test@gmail.com';
  const password = 'password';

  jest.mock('@mancho.devs/cognito');

  const signInSpy = jest.spyOn(CognitoClient.prototype, 'signIn');

  it('should succeed to call `signInEpic` and return `SIGN_IN_SUCCESS`', async () => {
    const result = {
      AuthenticationResult: {
        AccessToken: 'AccessToken',
        ExpiresIn: 300,
        IdToken: 'IdToken',
        RefrechToken: 'RefreshToken',
        TokenType: 'Bearer',
      },
      ChallengeParameters: {},
    };

    signInSpy.mockImplementationOnce(async (_email, _password) => {
      expect(_email).toEqual(email);
      expect(_password).toEqual(password);

      return Promise.resolve(result as any);
    });

    const state$ = signInEpic(of(signInRequest(email, password)));
    const action = await lastValueFrom(state$);

    expect.assertions(3);

    expect(action).toEqual({
      type: AuthActionTypes.SIGN_IN_SUCCESS,
      result,
    });
  });

  it('should fail to call `signInEpic` and return `SIGN_IN_FAILURE`', async () => {
    const error = new Error('Sign in failed');

    signInSpy.mockImplementationOnce(async (_email, _password) => {
      expect(_email).toEqual(email);
      expect(_password).toEqual(password);

      return Promise.reject(error);
    });

    const state$ = signInEpic(of(signInRequest(email, password)));
    const action = await lastValueFrom(state$);

    expect.assertions(3);

    expect(action).toEqual({
      type: AuthActionTypes.SIGN_IN_FAILURE,
      payload: error,
    });
  });
});
