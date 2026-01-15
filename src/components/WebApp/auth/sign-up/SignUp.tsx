/* External dependencies */
import React, { useState } from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';

/* Local dependencies */
import Logo from '../../../../assets/images/mapApp/Logo.png';
import { setActiveModal, setEmail } from '../Modal/uiRedux/uiAction';
import { RootState, AppDispatch } from '../../../../redux/store';

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [localError, setLocalError] = useState('');

  const { activeModal, email, isLoading } = useSelector((state: RootState) => state.ui);

  const handleNext = () => {
    setLocalError('');

    const cleanedEmail = email ? email.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanedEmail) {
      setLocalError('Пожалуйста, введите почту');
      return;
    }
    if (!emailRegex.test(cleanedEmail)) {
      setLocalError('Некорректный формат почты');
      return;
    }
    dispatch(setEmail(cleanedEmail));

    dispatch(setActiveModal('password'));
  };
  const handleBack = () => {
    dispatch(setActiveModal('intro'));
  };

  const handleClose = () => {
    dispatch(setActiveModal(null));
  };

  return (
    <Modal
      isOpen={activeModal === 'signup'}
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

      <Div>
        <Div>
          <Text
            textSize={{ xs: '28px', md: '35px' }}
            textWeight="600"
            textColor="white"
            textAlign="center"
            p={{ b: '20px', t: '120px' }}
          >
            Создайте аккаунт
          </Text>

          <Text textSize="15px" textColor="#ddd" p={{ l: '180px', b: '8px' }}>
            Карта терминалов от Finik, исследуйте,
          </Text>
          <Text textSize="15px" textColor="#ddd" p={{ l: '190px' }}>
            отмечайте и зарабатывайте баллы
          </Text>

          <Div p={{ l: '140px', t: '50px' }}>
            <Text textSize="14px" textColor="#ddd" p={{ b: '8px', l: '8px' }}>
              Нам нужна только ваша почта
            </Text>

            <Input
              w="370px"
              h="52px"
              placeholder="Введите адрес эл. почты"
              value={email}
              onChange={(e) => {
                setLocalError('');
                dispatch(setEmail(e.target.value));
              }}
              p={{ x: '16px', y: '14px' }}
              rounded="12px"
              bg="#2a2a2a"
              border="1px solid"
              borderColor={localError ? '#ff4444' : '#444'}
              focusBorderColor="#ffffffff"
              textColor="white"
              placeholderTextColor="#888"
            />

            {localError && (
              <Text textSize="12px" textColor="#ff4444" p={{ t: '8px', l: '8px' }}>
                {localError}
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
              disabled={isLoading}
            >
              {isLoading ? 'Проверяем...' : 'Далее'}
            </Button>
          </Div>
        </Div>
      </Div>
    </Modal>
  );
};

export default SignUp;
