import React, { useState } from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../../../../assets/images/mapApp/Logo.png';
import { setActiveModal, confirmSignUpRequest } from '../authRedux/authAction';
import { RootState, AppDispatch } from '../../../../redux/store';

const SignUpPinCode = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { activeModal, isLoading, error, email } = useSelector((state: RootState) => state.auth);

  const [pinCode, setPinCode] = useState('');

  if (activeModal !== 'signup-code') return null;

  const handleNext = () => {
    if (pinCode.length === 6) {
      dispatch(confirmSignUpRequest(email, pinCode));
      dispatch(setActiveModal('login'));
      setPinCode('');
    }
  };

  const handleBack = () => {
    dispatch(setActiveModal('password'));
  };

  const handleClose = () => {
    dispatch(setActiveModal(null));
  };

  return (
    <Modal
      isOpen={activeModal === 'signup-code'}
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
        <Text textSize="24px" textWeight="600" textColor="white" textAlign="center" p={{ b: '30px' }}>
          Подтверждение
        </Text>
        <Text textSize="14px" textColor="#ddd" p={{ t: '24px', b: '17px' }}>
          Введи полученный код, чтобы подтвердить свою почту
        </Text>
        <Input
          w="370px"
          h="50px"
          type="text"
          placeholder="Введите код"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          p={{ x: '16px', y: '14px' }}
          rounded="12px"
          bg="#2a2a2a"
          border="1px solid"
          borderColor={error ? '#ff4444' : '#444'}
          focusBorderColor="#ffffffff"
          textColor="white"
          placeholderTextColor="#888"
          maxLength={6}
        />

        {error && (
          <Text textSize="12px" textColor="#ff4444" p={{ t: '8px' }}>
            {error}
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
          onClick={handleNext}
          m={{ t: '20px' }}
          disabled={isLoading || !pinCode}
        >
          {isLoading ? 'Проверяем...' : 'Далее'}
        </Button>
      </Div>
    </Modal>
  );
};

export default SignUpPinCode;
