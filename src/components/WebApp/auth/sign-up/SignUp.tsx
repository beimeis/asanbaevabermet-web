/* External dependencies */
import React from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';

/* Local dependencies */
import Logo from '../../../../assets/images/mapApp/Logo.png';
import Confirm from './Confirm';
import {
  setEmail,
  setPassword,
  setConfirmPassword,
  validateCredentials,
  closeSignupModal,
  openIntroFromSignup,
} from '../redux/action';
import { RootState, AppDispatch } from '../../../../redux/store';

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isSignupModalOpen,
    signupStep,
    email,
    password,
    confirmPassword,
    hasEmailError,
    hasPasswordError,
    hasConfirmPasswordError,
  } = useSelector((state: RootState) => state.authReducer);

  const handleClose = () => dispatch(closeSignupModal());
  const handleNext = () => dispatch(validateCredentials());
  const handleGoBackIntro = () => dispatch(openIntroFromSignup());

  if (!isSignupModalOpen) return null;

  return (
    <Modal
      isOpen={isSignupModalOpen}
      onClose={handleClose}
      align="center"
      w={{ xs: '90%', md: '43.125rem' }}
      h={{ xs: 'auto', md: signupStep === 'confirm' ? '38rem' : '42rem' }}
      minH="650px"
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
      {signupStep !== 'confirm' && (
        <Icon
          name="LeftArrow"
          size="30px"
          color="#fff"
          pos="absolute"
          left="24px"
          top="24px"
          cursor="pointer"
          onClick={handleGoBackIntro}
        />
      )}
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
        {signupStep === 'register' || signupStep === 'credentials' ? (
          <Div>
            <Text
              textSize={{ xs: '28px', md: '35px' }}
              textWeight="600"
              textColor="white"
              textAlign="center"
              p={{ b: '20px', t: '60px' }}
            >
              Создайте аккаунт
            </Text>
            <Div p={{ l: '150px' }}>
              <Text textSize="14px" textColor="#ddd" p={{ b: '8px' }}>
                Эл. почта
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
                borderColor={hasEmailError ? '#ff4444' : '#444'}
                focusBorderColor="#ffffffff"
                textColor="white"
                placeholderTextColor="#888"
              />

              <Text textSize="14px" textColor="#ddd" p={{ t: '24px', b: '8px' }}>
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
                borderColor={hasPasswordError ? '#ff4444' : '#444'}
                focusBorderColor="#ffffffff"
                textColor="white"
                placeholderTextColor="#888"
              />

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
                borderColor={hasConfirmPasswordError ? '#ff4444' : '#444'}
                focusBorderColor="#ffffffff"
                textColor="white"
                placeholderTextColor="#888"
              />

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
              >
                Далее
              </Button>
            </Div>
          </Div>
        ) : signupStep === 'confirm' ? (
          // === КОМПОНЕНТ CONFIRM ===
          <Confirm />
        ) : null}
      </Div>
    </Modal>
  );
};

export default SignUp;
