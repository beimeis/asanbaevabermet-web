/* External dependencies */
import React from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';

/* Local dependencies */
import Logo from '../../../../assets/images/mapApp/Logo.png';
import { setEmail, setPassword, closeLoginModal, openIntroFromLogin } from '../redux/action';
import { RootState, AppDispatch } from '../../../../redux/store';

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoginModalOpen, email, password, hasEmailError, hasPasswordError } = useSelector(
    (state: RootState) => state.authReducer,
  );

  const handleClose = () => dispatch(closeLoginModal());
  const handleGoBackIntro = () => dispatch(openIntroFromLogin());

  if (!isLoginModalOpen) return null;

  const handleLogin = () => {
    console.log('Login:', { email, password });
  };

  return (
    <Modal
      isOpen={isLoginModalOpen}
      onClose={handleClose}
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
      overflow="hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <Icon
        name="LeftArrow"
        size="30px"
        color="#fff"
        hoverColor="#ACF709"
        pos="absolute"
        left="24px"
        top="24px"
        cursor="pointer"
        onClick={handleGoBackIntro}
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

      <Text
        textSize={{ xs: '28px', md: '35px' }}
        textWeight="600"
        textColor="white"
        textAlign="center"
        p={{ t: '60px' }}
      >
        Войти в аккаунт
      </Text>
      <Div p={{ t: '80px', l: '130px' }}>
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
          textColor="white"
          focusBorderColor="#ffffffff"
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

        <Button
          w="370px"
          h="52px"
          bg="#ACF709"
          hoverBg="#92d030"
          rounded="12px"
          textWeight="700"
          textSize="16px"
          textColor="#333"
          m={{ t: '40px' }}
          // onClick={handleLogin}
        >
          Войти
        </Button>
      </Div>
    </Modal>
  );
};

export default SignIn;
