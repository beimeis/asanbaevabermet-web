import React from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../../../../assets/images/mapApp/Logo.png';
import { resetPasswordRequest, setActiveModal, setEmail } from '../authRedux/authAction';
import { RootState, AppDispatch } from '../../../../redux/store';

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { activeModal, email, isLoading, error } = useSelector((state: RootState) => state.auth);

  if (activeModal !== 'forgot-password') return null;

  const cleanedEmail = email ? email.trim() : '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isAllValid = emailRegex.test(cleanedEmail);

  const handleNext = () => {
    if (!isAllValid) return;

    dispatch(setEmail(cleanedEmail));
    dispatch(resetPasswordRequest(cleanedEmail));
    dispatch(setActiveModal('reset-code'));
  };

  const handleBack = () => {
    dispatch(setActiveModal('login'));
  };

  const handleClose = () => {
    dispatch(setActiveModal(null));
  };

  return (
    <Modal
      isOpen
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
          Восстановление пароля
        </Text>

        <Text textSize="14px" textColor="#ddd" p={{ b: '8px' }}>
          Введите email
        </Text>

        <Input
          w="370px"
          h="50px"
          placeholder="Введите адрес эл. почты"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          p={{ x: '16px', y: '14px' }}
          rounded="12px"
          bg="#2a2a2a"
          border="1px solid"
          borderColor={!isAllValid && email.length > 0 ? '#ff4444' : error ? '#ff4444' : '#444'}
          textColor="white"
          focusBorderColor="#fff"
          placeholderTextColor="#888"
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
          m={{ t: '40px' }}
          disabled={isLoading || !isAllValid}
          cursor={!isAllValid ? 'not-allowed' : 'pointer'}
          opacity={!isAllValid ? '0.5' : '1'}
        >
          {isLoading ? 'Отправляем...' : 'Получить код'}
        </Button>
      </Div>
    </Modal>
  );
};

export default ForgotPassword;
