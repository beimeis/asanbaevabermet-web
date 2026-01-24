import CognitoClient from '@mancho.devs/cognito';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { of } from 'rxjs/internal/observable/of';

import { AuthActionTypes, confirmPasswordRequest } from '../authAction';
import { confirmPasswordEpic } from '../Epic';

describe('confirmPasswordEpic', () => {
  const email = 'test@gmail.com';
  const password = 'password';
  const code = 'code';

  jest.mock('@mancho.devs/cognito');

  const confirmPasswordSpy = jest.spyOn(CognitoClient.prototype, 'confirmPassword');

  it('should succeed to call `confirmPasswordEpic` and return `CONFIRM_PASSWORD_SUCCESS`', async () => {
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

    confirmPasswordSpy.mockImplementationOnce(async (_email, _password, _code) => {
      expect(_email).toEqual(email);
      expect(_password).toEqual(password);
      expect(_code).toEqual(code);

      return Promise.resolve(result as any);
    });

    const state$ = confirmPasswordEpic(of(confirmPasswordRequest(email, password, code)));
    const action = await lastValueFrom(state$);

    expect.assertions(4);

    expect(action).toEqual({
      type: AuthActionTypes.CONFIRM_PASSWORD_SUCCESS,
      result,
    });
  });
});
