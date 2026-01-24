import React from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Logo from '../../../../assets/images/mapApp/Logo.png';
import { setActiveModal, setPassword, setConfirmPassword, confirmPasswordRequest } from '../authRedux/authAction';
import { RootState, AppDispatch } from '../../../../redux/store';
import { getAuthErrorKey } from '../../../../utils/errorHelpers';

const NewPassword = () => {
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

      <Div p={{ x: '140px', t: '100px' }}>
        <Text textSize="14px" textColor="#ddd" p={{ b: '8px' }}>
          Пароль
        </Text>
        <Input
          w="370px"
          h="50px"
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          p={{ x: '16px', y: '14px' }}
          rounded="12px"
          bg="#2a2a2a"
          border="1px solid"
          borderColor={password.length > 0 && !validation.length ? '#ff4444' : '#444'}
          focusBorderColor="#ffffff"
          textColor="white"
          placeholderTextColor="#888"
        />

        <Text textSize="14px" textColor="#ddd" p={{ t: '20px', b: '8px' }}>
          Повторите пароль
        </Text>
        <Input
          w="370px"
          h="50px"
          type="password"
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
          p={{ x: '16px', y: '14px' }}
          rounded="12px"
          bg="#2a2a2a"
          border="1px solid"
          borderColor={confirmPassword.length > 0 && !validation.match ? '#ff4444' : '#444'}
          focusBorderColor="#ffffff"
          textColor="white"
          placeholderTextColor="#888"
        />

        <Div textSize="13px" p={{ t: '20px' }}>
          <Text textColor="#ddd" p={{ b: '4px' }}>
            Пароль должен содержать:
          </Text>
          <Text textColor={getReqColor(validation.length)}>• минимум 8 символов</Text>
          <Text textColor={getReqColor(validation.upperCase)}>• хотя бы одну заглавную букву</Text>
          <Text textColor={getReqColor(validation.lowerCase)}>• хотя бы одну строчную букву</Text>
          <Text textColor={getReqColor(validation.number)}>• хотя бы одну цифру</Text>
          <Text textColor={getReqColor(validation.specialChar)}>• один спецсимвол: ~ # @ $ % & ! * _ ? ^ -</Text>

          {confirmPassword.length > 0 && (
            <Text textColor={validation.match ? '#ACF709' : '#ff4444'} p={{ t: '4px' }}>
              • пароли {validation.match ? 'совпадают' : 'не совпадают'}
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
          {isLoading ? 'Загрузка...' : 'Далее'}
        </Button>
      </Div>
    </Modal>
  );
};

export default NewPassword;
