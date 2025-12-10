/* External dependencies */
import React from 'react';
import { Div, Button, Image, Text } from 'atomize';
import { Link } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';

/* Local dependencies */
import Logo from '../../assets/images/mapApp/Logo.png';
import AccIcon from '../../assets/images/mapApp/accountIcon.png';
import CustomModal from './CustomModal';
import { openModal, closeModal, setModalView } from './modal/redux/action';
import { RootState } from '../../redux/store';

// interface RootState {
//   authReducer: {
//     isModalOpen: boolean;
//     currentView: 'intro' | 'login' | 'register';
//     email: string;
//     password: string;
//   };
// }

export default function WebApp() {
  const useAppDispatch = () => useDispatch<any>();
  const dispatch = useAppDispatch();

  const { isModalOpen, currentView } = useSelector((state: RootState) => state.authReducer);

  const handleOpen = () => {
    dispatch(openModal('intro'));
  };
  const onClose = () => {
    dispatch(closeModal());
  };

  const switchToLogin = () => {
    dispatch(setModalView('login'));
  };

  const switchToRegister = () => {
    dispatch(setModalView('register'));
  };
  const goBack = () => {
    dispatch(setModalView('intro'));
  };

  return (
    <Div d="flex" align="flex-start">
      <Div>
        <Link to="/">
          <Button
            w={{ xs: '120px', xl: '120px' }}
            h={{ xs: '46px', xl: '46px' }}
            m={{ t: '20px', l: '50px' }}
            border="2px solid"
            borderColor=" #C0C0C0"
            rounded="16px"
          >
            <Image src={Logo} w={{ xs: '20px', xl: '20px' }} h={{ xs: '20px', xl: '20px' }} />
            <Text p={{ l: '13px' }} textSize="18px">
              Карта
            </Text>
          </Button>
        </Link>
      </Div>
      <Div>
        <Button
          w={{ xs: '120px', xl: '120px' }}
          h={{ xs: '46px', xl: '46px' }}
          m={{ t: '20px', l: '1350px' }}
          border="2px solid"
          borderColor=" #ffffffff"
          hover={{
            bg: '#b4c967',
            color: 'white',
            shadow: '0 0 8px rgba(255, 255, 255, 0.7)',
          }}
          rounded="16px"
          onClick={handleOpen}
        >
          <Image src={AccIcon} w={{ xs: '20px', xl: '20px' }} h={{ xs: '20px', xl: '20px' }} />
          <Text p={{ l: '10px' }}>войти</Text>
        </Button>
      </Div>
      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onClose={onClose}
          currentView={currentView}
          onSwitchToLogin={switchToLogin}
          onSwitchToRegister={switchToRegister}
          onGoBack={goBack}
        />
      )}
    </Div>
  );
}
