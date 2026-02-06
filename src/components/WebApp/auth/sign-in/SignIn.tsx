import React, { useState } from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Logo from '../../../../assets/images/mapApp/Logo.png';
import { setActiveModal, setEmail, setPassword, signInRequest } from '../authRedux/authAction';
import { RootState, AppDispatch } from '../../../../redux/store';
import { getAuthErrorKey } from '../../../../utils/errorHelpers';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');

  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { activeModal, email, password, emailError, passwordError, isLoading, error } = useSelector(
    (state: RootState) => state.auth,
  );

  if (activeModal !== 'login') return null;

  const validation = { length: password.length >= 8 };

  const handleLogin = () => {
    setLocalError('');

    const cleanedEmail = email ? email.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanedEmail) {
      setLocalError(t('auth.signup.errors.emptyEmail'));
      return;
    }
    if (!emailRegex.test(cleanedEmail)) {
      setLocalError(t('auth.signup.errors.invalidEmail'));
      return;
    }

    dispatch(setEmail(cleanedEmail));
    dispatch(signInRequest(cleanedEmail, password));
  };

  const handleBack = () => dispatch(setActiveModal('intro'));
  const handleClose = () => dispatch(setActiveModal(null));
  const handleForgotPassword = () => dispatch(setActiveModal('forgot-password'));

  return (
    <Modal
      isOpen={activeModal === 'login'}
      onClose={handleClose}
      align="center"
      rounded="20px"
      w={{ xs: '90%', md: 'auto' }}
      minW={{ xs: '0', md: '700px' }}
      minH={{ xs: 'auto', md: '600px' }}
      style={{
        background: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      overflow="auto"
      onClick={(e) => e.stopPropagation()}
    >
      <Icon
        name="LeftArrow"
        size="24px"
        color="#fff"
        hoverColor="#ACF709"
        pos="absolute"
        left="20px"
        top="20px"
        cursor="pointer"
        onClick={handleBack}
        zIndex="10"
      />

      <Icon
        name="Cross"
        size="24px"
        color="#fff"
        pos="absolute"
        right="20px"
        top="20px"
        cursor="pointer"
        onClick={handleClose}
        zIndex="10"
      />

      <Div
        d="flex"
        flexDir="column"
        align="center"
        justify="center"
        w="100%"
        h="100%"
        minH={{ xs: 'auto', md: '600px' }}
        p={{ x: '24px', y: '60px' }}
      >
        <Image src={Logo} w="46px" h="46px" m={{ b: '20px' }} />

        <Div d="flex" flexDir="column" w="100%" maxW="370px">
          <Text
            textSize={{ xs: '28px', md: '35px' }}
            textWeight="600"
            textColor="white"
            textAlign="center"
            m={{ b: '32px' }}
          >
            {t('auth.signIn.title')}
          </Text>

          <Text textSize="14px" textColor="#ddd" m={{ b: '8px' }}>
            {t('auth.signIn.emailLabel')}
          </Text>
          <Input
            w="100%"
            h="50px"
            placeholder={t('auth.signIn.emailPlaceholder')}
            value={email}
            onChange={(e) => {
              setLocalError('');
              dispatch(setEmail(e.target.value));
            }}
            p={{ x: '16px' }}
            rounded="12px"
            bg="#2a2a2a"
            border="1px solid"
            borderColor={localError || emailError ? '#ff4444' : '#444'}
            textColor="white"
            focusBorderColor="#fff"
          />
          {(localError || emailError) && (
            <Text textSize="12px" textColor="#ff4444" m={{ t: '4px' }}>
              {localError || emailError}
            </Text>
          )}

          <Text textSize="14px" textColor="#ddd" m={{ t: '16px', b: '8px' }}>
            {t('auth.signIn.passwordLabel')}
          </Text>
          <Div pos="relative">
            <Input
              w="100%"
              h="50px"
              type={showPassword ? 'text' : 'password'}
              placeholder={t('auth.signIn.passwordPlaceholder')}
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              p={{ l: '16px', r: '48px' }}
              rounded="12px"
              bg="#2a2a2a"
              border="1px solid"
              borderColor={password.length > 0 && !validation.length ? '#ff4444' : '#444'}
              focusBorderColor="#fff"
              textColor="white"
            />
            <Icon
              name={showPassword ? 'EyeSolid' : 'Eye'}
              size="20px"
              color="#aaa"
              pos="absolute"
              top="50%"
              right="14px"
              transform="translateY(-50%)"
              cursor="pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </Div>
          {passwordError && (
            <Text textSize="12px" textColor="#ff4444" m={{ t: '4px' }}>
              {passwordError}
            </Text>
          )}

          {error && (
            <Text textSize="12px" textColor="#ff4444" m={{ t: '12px' }}>
              {t(getAuthErrorKey(error))}
            </Text>
          )}

          <Button
            w="100%"
            h="52px"
            bg="#ACF709"
            hoverBg="#92d030"
            rounded="12px"
            textWeight="700"
            textSize="16px"
            textColor="#333"
            m={{ t: '32px' }}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? t('auth.signIn.loading') : t('auth.signIn.next')}
          </Button>

          <Text
            textSize="14px"
            textColor="#ACF709"
            cursor="pointer"
            textAlign="center"
            m={{ t: '16px' }}
            onClick={handleForgotPassword}
          >
            {t('auth.signIn.forgotPassword')}
          </Text>
        </Div>
      </Div>
    </Modal>
  );
};

export default SignIn;
