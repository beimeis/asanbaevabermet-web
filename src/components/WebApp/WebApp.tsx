/* External dependencies */
import React from 'react';
import { Div, Button, Image, Text, Icon } from 'atomize';
import { Link } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';

/* Local dependencies */
import Logo from '../../assets/images/mapApp/Logo.png';
import AccIcon from '../../assets/images/mapApp/accountIcon.png';
import CustomModal from './auth/Modal/CustomModal';
import SignIn from './auth/sign-in/SignIn';
import SignUp from './auth/sign-up/SignUp';
import SignUpPassword from './auth/sign-up/SignUpPassword';
import SignUpPinCode from './auth/sign-up/SignUpPinCode';
import ForgotPassword from '../../components/WebApp/auth/sign-in/ForgotPassword';
import NewPassword from '../../components/WebApp/auth/sign-in/NewPassword';
import SignInPinCode from './auth/sign-in/SignInPinCode';
import { setActiveModal, signOutRequest } from './auth/authRedux/authAction';
import { RootState, AppDispatch } from '../../redux/store';

export default function WebApp() {
  const dispatch = useDispatch<AppDispatch>();

  const { isAuthenticated, email, activeModal } = useSelector((state: RootState) => state.auth);

  const handleOpenIntro = () => {
    dispatch(setActiveModal('intro'));
  };

  const renderModal = () => {
    switch (activeModal) {
      case 'intro':
        return <CustomModal />;
      case 'login':
        return <SignIn />;
      case 'signup':
        return <SignUp />;
      case 'password':
        return <SignUpPassword />;
      case 'forgot-password':
        return <ForgotPassword />;
      case 'reset-code':
        return <SignInPinCode />;
      case 'new-password':
        return <NewPassword />;
      case 'signup-code':
        return <SignUpPinCode />;
      default:
        return null;
    }
  };

  return (
    <Div>
      <Div
        d="flex"
        justify="space-between"
        align="center"
        p={{ t: '20px', x: { xs: '20px', xl: '50px' } }}
        flexWrap="wrap"
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            bg="#333"
            border="2px solid #ccc3c3ff"
            hoverBg="#a5f003ff"
            hoverTextColor="black"
            rounded="16px"
            d="flex"
            align="center"
            justify="center"
            p={{ x: '20px', y: '12px' }}
            h="52px"
            minW="140px"
            cursor="pointer"
            textColor="white"
            transition
          >
            <Image src={Logo} w="24px" h="24px" />
            <Text textSize="18px" textWeight="500" p={{ l: '12px' }}>
              Карта
            </Text>
          </Button>
        </Link>
        <Div>
          {isAuthenticated ? (
            <Div d="flex" style={{ gap: '10px' }}>
              <Button
                bg="#333"
                border="2px solid white"
                hoverBg="#ACF709"
                hoverTextColor="black"
                hoverBorderColor="#ACF709"
                rounded="16px"
                d="flex"
                align="center"
                justify="center"
                p={{ x: '20px', y: '12px' }}
                h="52px"
                minW="140px"
                textWeight="600"
              >
                <Text textColor="#ACF709" hoverBg="#ACF709" hoverTextColor="black">
                  {email}
                </Text>
              </Button>
              <Button
                bg="#333"
                border="2px solid white"
                hoverBg="#ACF709"
                hoverTextColor="black"
                hoverBorderColor="#ACF709"
                rounded="16px"
                d="flex"
                p={{ x: '20px', y: '12px' }}
                h="52px"
                minW="50px"
                textWeight="200"
                onClick={() => dispatch(signOutRequest())}
              >
                <Icon name="Logout" size="26px" color="#ACF709" hoverBg="#ACF709" hoverColor="black" />
              </Button>
            </Div>
          ) : (
            <Div>
              <Button
                onClick={handleOpenIntro}
                bg="#333"
                border="2px solid white"
                hoverBg="#ACF709"
                hoverTextColor="black"
                hoverBorderColor="#ACF709"
                rounded="16px"
                d="flex"
                align="center"
                justify="center"
                p={{ x: '20px', y: '12px' }}
                h="52px"
                minW="140px"
                textWeight="600"
              >
                <Image src={AccIcon} w="24px" h="24px" />
                <Text textSize="18px" p={{ l: '12px' }}>
                  Войти
                </Text>
              </Button>
            </Div>
          )}
        </Div>
      </Div>

      {activeModal && renderModal()}
    </Div>
  );
}
