import CognitoClient from '@mancho.devs/cognito';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { of } from 'rxjs/internal/observable/of';

import { AuthActionTypes, signUpRequest } from '../authAction';
import { signUpEpic } from '../Epic';

describe('signUpEpic', () => {
  const email = 'test@gmail.com';
  const password = 'password';

  jest.mock('@mancho.devs/cognito');

  const signUpSpy = jest.spyOn(CognitoClient.prototype, 'signUp');

  it('should succeed to call `signUpEpic` and return `SIGN_UP_SUCCESS`', async () => {
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

    signUpSpy.mockImplementationOnce(async (_email, _password) => {
      expect(_email).toEqual(email);
      expect(_password).toEqual(password);

      return Promise.resolve(result as any);
    });

    const state$ = signUpEpic(of(signUpRequest(email, password)));
    const action = await lastValueFrom(state$);

    expect.assertions(3);

    expect(action).toEqual({
      type: AuthActionTypes.SIGN_UP_SUCCESS,
      result,
    });
  });
});
