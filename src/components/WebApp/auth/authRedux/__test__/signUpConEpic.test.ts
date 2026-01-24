import CognitoClient from '@mancho.devs/cognito';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { of } from 'rxjs/internal/observable/of';

import { AuthActionTypes, confirmSignUpRequest } from '../authAction';
import { confirmSignUpEpic } from '../Epic';

describe('confirmSignUpEpic', () => {
  const email = 'test@gmail.com';
  const code = 'code';

  jest.mock('@mancho.devs/cognito');

  const confirmSignUpSpy = jest.spyOn(CognitoClient.prototype, 'signUpConfirmCode');

  it('should succeed to call `confirmSignUpEpic` and return `CONFIRM_SIGN_UP_SUCCESS`', async () => {
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

    confirmSignUpSpy.mockImplementationOnce(async (_email, _code) => {
      expect(_email).toEqual(email);
      expect(_code).toEqual(code);

      return Promise.resolve(result as any);
    });

    const state$ = confirmSignUpEpic(of(confirmSignUpRequest(email, code)));
    const action = await lastValueFrom(state$);

    expect.assertions(3);

    expect(action).toEqual({
      type: AuthActionTypes.CONFIRM_SIGN_UP_SUCCESS,
      result,
    });
  });
});
