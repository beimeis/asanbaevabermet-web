/* External dependencies */
import React from 'react';
import { Modal, Image, Text, Div, Icon } from 'atomize';

/* Local dependencies */
import Logo from '../../assets/images/mapApp/Logo.png';
import CustomButton from './auth/common/CustomButton';
import SingIn from './auth/sing-in/SingIn';
import SingUp from './auth/sign-up/SingUp';
import { useDispatch } from 'react-redux';
import { resetRegistration } from '../../components/WebApp/modal/redux/action';
import { AppDispatch } from '../../redux/store';

interface CustomModal {
  isOpen: boolean;
  onClose: () => void;
  currentView: 'intro' | 'login' | 'register';
  currentStep: 'register' | 'confirm' | null;
  onSwitchToLogin: () => void;
  onSwitchToRegister: () => void;
  onGoBack: () => void;
}

const CustomModal = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, onClose, currentView, onSwitchToLogin, onSwitchToRegister, onGoBack } = props;

  const handleGoBack = () => {
    dispatch(resetRegistration());
    if (onGoBack) onGoBack();
  };

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
            <Text textSize="40px" textColor="#ffff" textAlign="center">
              Финик Карта
            </Text>
            <Div d="flex" justify="center" align="center" w="100%">
              <Text textSize="18px" textColor="#ffff" m={{ t: '40px' }} textAlign="center" maxW="80%">
                Отмечай места на карте где нет нашего терминала, мы поставим его, а тебе пришлем бонусы которые ты
                сможешь обменять на реальные призы
              </Text>
            </Div>

            <Div m={{ t: '80px', l: { xs: '20px', xl: '150px' } }}>
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
      h={{ xl: '600px', xs: 'auto' }}
      minH="600px"
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
          <Icon name="LeftArrow" size="32px" color="#fff" pos="absolute" left="24px" top="50%" onClick={handleGoBack} />
        )}
        <Icon name="Cross" size="25px" color="#fff" pos="absolute" right="24px" top="50%" onClick={onClose} />
      </Div>

      {renderContent()}
    </Modal>
  );
};

export default CustomModal;
