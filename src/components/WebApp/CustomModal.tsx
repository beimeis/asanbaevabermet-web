import React from 'react';
import { Modal, Image, Text, Div, Icon } from 'atomize';

import Logo from '../../assets/images/mapApp/Logo.png';
import CustomButton from './auth/common/CustomButton';
import SingIn from './auth/sing-in/SingIn';
import SingUp from './auth/sign-up/SingUp';

interface CustomModal {
  isOpen: boolean;
  onClose: () => void;
  currentView: 'intro' | 'login' | 'register';
  onSwitchToLogin: () => void;
  onSwitchToRegister: () => void;
  onGoBack: () => void;
}

const CustomModal = (props) => {
  const { isOpen, onClose, currentView, onSwitchToLogin, onSwitchToRegister, onGoBack } = props;

  const renderContent = () => {
    switch (currentView) {
      case 'login':
        return <SingIn />;

      case 'register':
        return <SingUp />;

      case 'intro':
      default:
        return (
          <Div>
            <Div d="flex" justify="center" align="center" w="100%">
              <Text textSize="15px" textColor="#ffff" m={{ t: '40px' }} textAlign="center" maxW="80%">
                Отмечай места на карте где нет нашего терминала, мы поставим его, а тебе пришлем бонусы...
              </Text>
            </Div>

            <Div m={{ t: '100px', x: { xs: '20px', xl: '200px' } }}>
              <CustomButton children="Войти в аккаунт" bg="#9be426ff" textColor="black" onClick={onSwitchToLogin} />
              <CustomButton children="Регистрация" bg="#f7f0f0ff" textColor="black" onClick={onSwitchToRegister} />
            </Div>
          </Div>
        );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      w={{ xl: '700px', xs: '90%' }}
      maxW="700px"
      h={{ xl: '516px', xs: 'auto' }}
      minH="516px"
      m={{ t: { xs: '10px', xl: '160px' } }}
      bg="black"
      rounded="16px"
      p={{ x: '20px', b: '20px' }}
      pos="relative"
    >
      <Div pos="relative" h="80px">
        <Div pos="absolute" left="50%" top="50%" transform="translate(-50%, -50%)">
          <Image src={Logo} w="50px" h="50px" />
        </Div>

        {currentView !== 'intro' && (
          <Icon name="LeftArrow" size="32px" color="#fff" pos="absolute" left="24px" top="50%" onClick={onGoBack} />
        )}
        <Icon name="Cross" size="25px" color="#fff" pos="absolute" right="24px" top="50%" onClick={onClose} />
      </Div>

      <Text textSize="40px" textColor="#ffff" textAlign="center" m={{ t: '20px' }}>
        Финик Карта
      </Text>

      {renderContent()}
    </Modal>
  );
};

export default CustomModal;
