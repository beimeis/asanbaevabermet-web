import React from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../../../../assets/images/mapApp/Logo.png';
import { setActiveModal, setPassword, setConfirmPassword, validateCredentials } from '../Modal/uiRedux/uiAction';

import { RootState, AppDispatch } from '../../../../redux/store';

const NewPassword = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { activeModal, password, confirmPassword, passwordError, confirmError } = useSelector(
    (state: RootState) => state.ui,
  );

  if (activeModal !== 'new-password') return null;

  const handleNext = () => {
    dispatch(validateCredentials());
  };

  const handleBack = () => {
    dispatch(setActiveModal('reset-code'));
  };

  const handleClose = () => {
    dispatch(setActiveModal(null));
  };

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
        <Text textSize="28px" textWeight="600" textColor="white" textAlign="center" p={{ b: '40px' }}>
          Новый пароль
        </Text>

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
          borderColor={passwordError ? '#ff4444' : '#444'}
          focusBorderColor="#ffffffff"
          textColor="white"
          placeholderTextColor="#888"
        />
        {passwordError && (
          <Text textSize="12px" textColor="#ff4444" p={{ t: '8px' }}>
            {passwordError}
          </Text>
        )}

        <Text textSize="14px" textColor="#ddd" p={{ t: '24px', b: '8px' }}>
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
          borderColor={confirmError ? '#ff4444' : '#444'}
          focusBorderColor="#ffffffff"
          textColor="white"
          placeholderTextColor="#888"
        />
        {confirmError && (
          <Text textSize="12px" textColor="#ff4444" p={{ t: '8px' }}>
            {confirmError}
          </Text>
        )}

        <Div textSize="13px" textColor="#ddd" p={{ t: '20px', b: '30px' }}>
          <Text>Пароль должен содержать:</Text>
          <Text>• минимум 8 символов</Text>
          <Text>• хотя бы одну заглавную букву</Text>
          <Text>• хотя бы одну строчную букву или цифру</Text>
          <Text>• один спецсимвол: ~ # @ $ % & ! * _ ? ^ -</Text>
        </Div>

        <Button
          w="370px"
          h="52px"
          bg="#ACF709"
          hoverBg="#92d030"
          rounded="12px"
          textWeight="700"
          textSize="16px"
          textColor="#333"
          onClick={handleNext}
          m={{ t: '20px' }}
        ></Button>
      </Div>
    </Modal>
  );
};

export default NewPassword;
