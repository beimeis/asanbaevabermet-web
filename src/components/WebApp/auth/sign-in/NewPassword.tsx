import React, { useState } from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Logo from '../../../../assets/images/mapApp/Logo.png';
import { setActiveModal, setPassword, setConfirmPassword, confirmPasswordRequest } from '../authRedux/authAction';
import { RootState, AppDispatch } from '../../../../redux/store';
import { getAuthErrorKey } from '../../../../utils/errorHelpers';

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { activeModal, email, password, confirmPassword, isLoading, error, code } = useSelector(
    (state: RootState) => state.auth,
  );

  if (activeModal !== 'new-password') return null;

  const validation = {
    length: password.length >= 8,
    upperCase: /[A-Z]/.test(password),
    lowerCase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[~#@$%&!*_?^-]/.test(password),
    match: password === confirmPassword && confirmPassword.length > 0,
  };

  const isAllValid =
    validation.length &&
    validation.upperCase &&
    validation.lowerCase &&
    validation.number &&
    validation.specialChar &&
    validation.match &&
    code.length > 0;

  const getReqColor = (isValid: boolean) => {
    if (password.length === 0) return '#ddd';
    return isValid ? '#ACF709' : '#ff4444';
  };

  const handleNext = () => {
    if (isAllValid) {
      dispatch(confirmPasswordRequest(email, code, password));
    }
  };

  const handleBack = () => dispatch(setActiveModal('reset-code'));
  const handleClose = () => dispatch(setActiveModal(null));

  return (
    <Modal
      isOpen={activeModal === 'new-password'}
      align="center"
      w={{ xs: '90%', md: '43.125rem' }}
      h={{ xs: 'auto', md: '32.25rem' }}
      minH="600px"
      minW="700px"
      pos="relative"
      rounded="20px"
      style={{
        background: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '20px',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <Icon
        name="LeftArrow"
        size="30px"
        color="#fff"
        pos="absolute"
        left="24px"
        top="24px"
        cursor="pointer"
        onClick={handleBack}
      />

      <Div pos="absolute" top="30px" left="50%" transform="translateX(-50%)">
        <Image src={Logo} w="46px" h="46px" />
      </Div>

      <Icon
        name="Cross"
        size="30px"
        color="#fff"
        pos="absolute"
        right="25px"
        top="25px"
        cursor="pointer"
        onClick={handleClose}
      />
      <Text textSize="30px" textColor="#ffffff" p={{ t: '60px', l: '220px' }}>
        {t('auth.newPassword.title')}
      </Text>
      <Div p={{ x: '140px', t: '20px' }}>
        <Text textSize="14px" textColor="#ddd" p={{ b: '8px' }}>
          {t('auth.newPassword.passwordLabel')}
        </Text>

        <Div pos="relative" w="370px">
          <Input
            h="50px"
            type={showPassword ? 'text' : 'password'}
            placeholder={t('auth.newPassword.placeholder.password')}
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            p={{ x: '16px', y: '14px' }}
            pr="48px"
            rounded="12px"
            bg="#2a2a2a"
            border="1px solid"
            borderColor={password.length > 0 && !validation.length ? '#ff4444' : '#444'}
            focusBorderColor="#ffffff"
            textColor="white"
            placeholderTextColor="#888"
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
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </Div>

        <Text textSize="14px" textColor="#ddd" p={{ t: '20px', b: '8px' }}>
          {t('auth.newPassword.confirmPasswordLabel')}
        </Text>

        <Div pos="relative" w="370px">
          <Input
            h="50px"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder={t('auth.newPassword.placeholder.confirmPassword')}
            value={confirmPassword}
            onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
            p={{ x: '16px', y: '14px' }}
            pr="48px"
            rounded="12px"
            bg="#2a2a2a"
            border="1px solid"
            borderColor={confirmPassword.length > 0 && !validation.match ? '#ff4444' : '#444'}
            focusBorderColor="#ffffff"
            textColor="white"
            placeholderTextColor="#888"
          />

          <Icon
            name={showConfirmPassword ? 'EyeSolid' : 'Eye'}
            size="20px"
            color="#aaa"
            pos="absolute"
            top="50%"
            right="14px"
            transform="translateY(-50%)"
            cursor="pointer"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          />
        </Div>

        <Div textSize="13px" p={{ t: '20px' }}>
          <Text textColor="#ddd" p={{ b: '4px' }}>
            {t('auth.newPassword.requirementsTitle')}
          </Text>
          <Text textColor={getReqColor(validation.length)}>• {t('auth.newPassword.requirements.length')}</Text>
          <Text textColor={getReqColor(validation.upperCase)}>•{t('auth.newPassword.requirements.upperCase')}</Text>
          <Text textColor={getReqColor(validation.lowerCase)}>•{t('auth.newPassword.requirements.lowerCase')}</Text>
          <Text textColor={getReqColor(validation.number)}>• {t('auth.newPassword.requirements.number')}</Text>
          <Text textColor={getReqColor(validation.specialChar)}>•{t('auth.newPassword.requirements.specialChar')}</Text>

          {confirmPassword.length > 0 && (
            <Text textColor={validation.match ? '#ACF709' : '#ff4444'} p={{ t: '4px' }}>
              •{' '}
              {validation.match
                ? t('auth.newPassword.requirements.match.ok')
                : t('auth.newPassword.requirements.match.fail')}
            </Text>
          )}
        </Div>

        {error && (
          <Text textSize="12px" textColor="#ff4444" p={{ t: '10px' }}>
            {t(getAuthErrorKey(error))}
          </Text>
        )}

        <Button
          w="370px"
          h="52px"
          bg="#ACF709"
          hoverBg="#92d030"
          rounded="12px"
          textWeight="700"
          textSize="16px"
          textColor="#333"
          m={{ t: '30px' }}
          onClick={handleNext}
          disabled={isLoading || !isAllValid}
          cursor={!isAllValid ? 'not-allowed' : 'pointer'}
          opacity={!isAllValid ? '0.5' : '1'}
        >
          {isLoading ? t('auth.newPassword.loading') : t('auth.newPassword.next')}
        </Button>
      </Div>
    </Modal>
  );
};

export default NewPassword;
