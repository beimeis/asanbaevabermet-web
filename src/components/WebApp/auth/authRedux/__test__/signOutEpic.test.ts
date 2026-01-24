import CognitoClient from '@mancho.devs/cognito';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { of } from 'rxjs/internal/observable/of';

import { AuthActionTypes, signOutRequest } from '../authAction';
import { signOutEpic } from '../Epic';

describe('signOutEpic', () => {
  jest.mock('@mancho.devs/cognito');

  const signOutSpy = jest.spyOn(CognitoClient.prototype, 'signOut');

  it('should succeed to call `signOutEpic` and return `SIGN_OUT_SUCCESS`', async () => {
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

    signOutSpy.mockImplementationOnce(async () => {
      return Promise.resolve(result as any);
    });

    const state$ = signOutEpic(of(signOutRequest()));
    const action = await lastValueFrom(state$);

    expect.assertions(1);

    expect(action).toEqual({
      type: AuthActionTypes.SIGN_OUT_SUCCESS,
    });
  });
});
