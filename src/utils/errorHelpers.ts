export const getAuthErrorKey = (error: any): string => {
  const message = error?.message || error?.toString() || '';

  if (message.includes('Cannot reset password for the user')) return 'auth.errors.resetPasswordEmailNotConfirmed';
  if (message.includes('User does not exist')) return 'auth.errors.userNotFound';
  if (message.includes('Incorrect username or password')) return 'auth.errors.incorrectCredentials';
  if (message.includes('Password did not conform')) return 'auth.errors.passwordNoSpaces';
  if (message.includes('User is not confirmed')) return 'auth.errors.userNotConfirmed';
  if (message.includes('Invalid code') || message.includes('Code mismatch')) return 'auth.errors.invalidCode';
  if (message.includes('LimitExceededException') || message.includes('TooManyRequestsException'))
    return 'auth.errors.limitExceeded';
  if (message.includes('ExpiredCodeException') || message.includes('Invalid code provided, please request a code again'))
    return 'auth.errors.codeExpired';
  if (message.includes('An account with the given email already exists')) return 'auth.errors.emailExists';
  if (message.includes('Invalid verification code provided, please try again.')) return 'auth.errors.invalidVerificationCode';

  return 'auth.errors.genericError';
};
