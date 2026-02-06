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

  const isAllValid = Object.values(validation).every(Boolean) && code.length > 0;
  const getReqColor = (isValid: boolean) => (password.length === 0 ? '#ddd' : isValid ? '#ACF709' : '#ff4444');

  const handleNext = () => isAllValid && dispatch(confirmPasswordRequest(email, code, password));
  const handleBack = () => dispatch(setActiveModal('reset-code'));
  const handleClose = () => dispatch(setActiveModal(null));

  return (
    <Modal
      isOpen={activeModal === 'new-password'}
      onClose={handleClose}
      align="center"
      rounded="20px"
      w={{ xs: '90%', md: 'auto' }}
      minW={{ xs: '0', md: '700px' }}
      minH={{ xs: 'auto', md: '600px' }}
      style={{ background: 'rgba(0, 0, 0, 0.55)', backdropFilter: 'blur(16px)' }}
      overflow="auto"
      onClick={(e) => e.stopPropagation()}
    >
      <Icon
        name="LeftArrow"
        size="24px"
        color="#fff"
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
          <Text textSize="30px" textColor="#ffffff" textAlign="center" m={{ b: '24px' }}>
            {t('auth.newPassword.title')}
          </Text>

          <Text textSize="14px" textColor="#ddd" m={{ b: '8px' }}>
            {t('auth.newPassword.passwordLabel')}
          </Text>
          <Div pos="relative" m={{ b: '16px' }}>
            <Input
              w="100%"
              h="50px"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              p={{ l: '16px', r: '48px' }}
              rounded="12px"
              bg="#2a2a2a"
              border="1px solid"
              borderColor={password.length > 0 && !validation.length ? '#ff4444' : '#444'}
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

          <Text textSize="14px" textColor="#ddd" m={{ b: '8px' }}>
            {t('auth.newPassword.confirmPasswordLabel')}
          </Text>
          <Div pos="relative" m={{ b: '16px' }}>
            <Input
              w="100%"
              h="50px"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
              p={{ l: '16px', r: '48px' }}
              rounded="12px"
              bg="#2a2a2a"
              border="1px solid"
              borderColor={confirmPassword.length > 0 && !validation.match ? '#ff4444' : '#444'}
              textColor="white"
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
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </Div>

          <Div textSize="13px" m={{ b: '20px' }}>
            <Text textColor="#ddd" m={{ b: '4px' }}>
              {t('auth.newPassword.requirementsTitle')}
            </Text>
            {Object.keys(validation)
              .filter((k) => k !== 'match')
              .map((key) => (
                <Text key={key} textColor={getReqColor(validation[key])}>
                  • {t(`auth.newPassword.requirements.${key}`)}
                </Text>
              ))}
            {confirmPassword.length > 0 && (
              <Text textColor={validation.match ? '#ACF709' : '#ff4444'}>
                •{' '}
                {validation.match
                  ? t('auth.newPassword.requirements.match.ok')
                  : t('auth.newPassword.requirements.match.fail')}
              </Text>
            )}
          </Div>

          {error && (
            <Text textSize="12px" textColor="#ff4444" m={{ b: '10px' }}>
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
            onClick={handleNext}
            disabled={isLoading || !isAllValid}
            opacity={!isAllValid ? '0.5' : '1'}
          >
            {isLoading ? t('auth.newPassword.loading') : t('auth.newPassword.next')}
          </Button>
        </Div>
      </Div>
    </Modal>
  );
};

export default NewPassword;
