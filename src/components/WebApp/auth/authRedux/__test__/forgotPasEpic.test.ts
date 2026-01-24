import CognitoClient from '@mancho.devs/cognito';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { of } from 'rxjs/internal/observable/of';

import { AuthActionTypes, resetPasswordRequest } from '../authAction';
import { forgotPasswordEpic } from '../Epic';

describe('forgotPasswordEpic', () => {
  const email = 'test@gmail.com';

  jest.mock('@mancho.devs/cognito');

  const forgotPasswordSpy = jest.spyOn(CognitoClient.prototype, 'forgotPassword');

  it('should succeed to call `forgotPasswordEpic` and return `RESET_PASSWORD_SUCCESS`', async () => {
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

    forgotPasswordSpy.mockImplementationOnce(async (_email) => {
      expect(_email).toEqual(email);

      return Promise.resolve(result as any);
    });

    const state$ = forgotPasswordEpic(of(resetPasswordRequest(email)));
    const action = await lastValueFrom(state$);

    expect.assertions(2);

    expect(action).toEqual({
      type: AuthActionTypes.RESET_PASSWORD_SUCCESS,
      result,
    });
  });
});
